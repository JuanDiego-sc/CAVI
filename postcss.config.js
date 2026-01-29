export default {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        '> 1%',
        'last 4 versions',
        'Firefox ESR',
        'not dead',
        'not IE 11'
      ],
      grid: 'autoplace',
      flexbox: 'no-2009'
    }
  }
}
