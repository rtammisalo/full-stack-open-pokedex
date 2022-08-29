const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout: 120000,
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
})
