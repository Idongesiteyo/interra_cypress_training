const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    baseUrl2: 'https://demoqa.com/radio-button',
    watchForFileChanges: false,
    defaultCommandTimeout: 120000,
    chromeWebSecurity: false,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 957,
    reporterOptions: {
      reportDir: "cypress/reports",
      reportTitle: "My HTML Report",
      reportPageTitle: "Cypress Mochawesome Report",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      console.log("HTTP Reporter plugin is loaded");
    },
  },
});
