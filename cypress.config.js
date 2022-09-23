const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.imdb.com/',
    videoUploadOnPasses: false,
    supportFile: false
  }
})