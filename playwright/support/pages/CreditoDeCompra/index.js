const { expect, locator } = require('@playwright/test');

class Credito {
    /**
         * @param {import('playwright').Page} page 
         */
    constructor(page) {
        this.page = page;
        this.titulo = page.locator('h1:has-text("Credit slips")');
    }

    async verificarSeOMenuCreditoEstaAberto() {
        await expect(this.titulo).toHaveText('Credit slips');
    }
}

module.exports = { Credito };