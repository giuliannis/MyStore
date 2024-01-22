const { expect, locator } = require('@playwright/test');

class Historico {
    /**
         * @param {import('playwright').Page} page 
         */
    constructor(page) {
        this.page = page;
        this.titulo = page.locator('h1:has-text("Order history")');
    }

    async verificarSeEstaEmHistoricoDeCompra(){
        await expect(this.titulo).toHaveText('Order history');
    }
}

module.exports = { Historico };