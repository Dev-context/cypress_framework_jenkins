const cucumber = require("cypress-cucumber-preprocessor").default;
const {defineConfig} = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const {addMatchImageSnapshotPlugin}= require("@simonsmith/cypress-image-snapshot/plugin")

module.exports = defineConfig({
    chromeWebSecurity: false,

    e2e: {
        baseUrl: "https://www.saucedemo.com/",
        specPattern: "cypress/e2e/*.feature",
        screenshotOnRunFailure:false,
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber());
            allureWriter(on, config);
            addMatchImageSnapshotPlugin(on)

            return config;
        }


    },
   
});
