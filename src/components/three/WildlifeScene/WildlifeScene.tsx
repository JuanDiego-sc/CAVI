import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleSystemProps {
    count: number;
}

// Nature-themed floating particles (pollen, dust, small lights)
function NatureParticles({ count }: ParticleSystemProps) {
    const pointsRef = useRef<THREE.Points>(null!);

    const { positions, colors, speeds } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const speeds = new Float32Array(count);

        const greenColors = [
            [0.298, 0.686, 0.314], // #4CAF50
            [0.506, 0.780, 0.518], // #81C784
            [0.647, 0.839, 0.655], // #A5D6A7
            [0.784, 0.902, 0.788], // #C8E6C9
            [0.180, 0.490, 0.196], // #2E7D32
            [1.0, 1.0, 0.878],     // Warm white
        ];

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Spread in a dome shape
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI * 0.6;
            const radius = 3 + Math.random() * 8;

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.cos(phi) - 2;
            positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta) - 5;

            // Pick random color
            const color = greenColors[Math.floor(Math.random() * greenColors.length)];
            colors[i3] = color[0];
            colors[i3 + 1] = color[1];
            colors[i3 + 2] = color[2];

            speeds[i] = 0.1 + Math.random() * 0.3;
        }

        return { positions, colors, speeds };
    }, [count]);

    useFrame((state) => {
        if (!pointsRef.current) return;

        const time = state.clock.getElapsedTime();
        const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const speed = speeds[i];

            // Gentle floating and swirling motion
            posArray[i3] += Math.sin(time * speed + i) * 0.003;
            posArray[i3 + 1] += Math.cos(time * speed * 0.5 + i * 0.1) * 0.002;
            posArray[i3 + 2] += Math.sin(time * speed * 0.3 + i * 0.2) * 0.002;
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        pointsRef.current.rotation.y = time * 0.015;
    });

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        return geo;
    }, [positions, colors]);

    return (
        <points ref={pointsRef} geometry={geometry}>
            <pointsMaterial
                size={0.06}
                vertexColors
                transparent
                opacity={0.7}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

// Fireflies effect
function Fireflies({ count = 30 }: { count?: number }) {
    const pointsRef = useRef<THREE.Points>(null!);

    const { positions, phases } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const phases = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 15;
            positions[i3 + 1] = Math.random() * 6 - 2;
            positions[i3 + 2] = (Math.random() - 0.5) * 10 - 3;
            phases[i] = Math.random() * Math.PI * 2;
        }

        return { positions, phases };
    }, [count]);

    useFrame((state) => {
        if (!pointsRef.current) return;

        const time = state.clock.getElapsedTime();
        const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
        const material = pointsRef.current.material as THREE.PointsMaterial;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const phase = phases[i];

            // Wandering motion
            posArray[i3] += Math.sin(time * 0.5 + phase) * 0.008;
            posArray[i3 + 1] += Math.cos(time * 0.3 + phase * 1.5) * 0.005;
            posArray[i3 + 2] += Math.sin(time * 0.4 + phase * 0.7) * 0.006;
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Pulsing glow
        material.opacity = 0.5 + Math.sin(time * 2) * 0.3;
    });

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geo;
    }, [positions]);

    return (
        <points ref={pointsRef} geometry={geometry}>
            <pointsMaterial
                size={0.15}
                color="#90EE90"
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

// Gentle ambient light animation
function AnimatedLights() {
    const light1 = useRef<THREE.PointLight>(null!);
    const light2 = useRef<THREE.PointLight>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (light1.current) {
            light1.current.position.x = Math.sin(time * 0.3) * 5;
            light1.current.position.y = Math.cos(time * 0.2) * 3 + 2;
            light1.current.intensity = 1 + Math.sin(time) * 0.3;
        }

        if (light2.current) {
            light2.current.position.x = Math.cos(time * 0.4) * 4;
            light2.current.position.z = Math.sin(time * 0.35) * 4;
        }
    });

    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight ref={light1} color="#81C784" intensity={1.5} distance={15} />
            <pointLight ref={light2} color="#A5D6A7" intensity={1} distance={10} position={[0, 3, -5]} />
        </>
    );
}

export function WildlifeScene() {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 6], fov: 55 }}
                gl={{
                    alpha: true,
                    antialias: true,
                    powerPreference: 'high-performance'
                }}
                style={{ background: 'transparent' }}
            >
                <AnimatedLights />
                <NatureParticles count={400} />
                <Fireflies count={25} />
            </Canvas>
        </div>
    );
}

export default WildlifeScene;
