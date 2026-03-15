function babelConfig(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['@emotion'],
  }
}

module.exports = babelConfig