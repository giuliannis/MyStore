// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    workers: 1,
    retries: 2,
    globalTimeout: 60*60*1000,
    reporter: [ ['html', { open: 'never' }] ],
    use: {
    headless: true,
    browserName: 'chromium',
    ignoreHTTPSErrors: true,
    trace: 'on',
    }
};

module.exports = config;

