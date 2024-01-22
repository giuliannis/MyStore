const { expect, locator } = require('@playwright/test');

class ListaDesejo {
    /**
         * @param {import('playwright').Page} page 
         */
    constructor(page) {
        this.page = page;
        this.botaoAbrir = page.locator('a:has-text("View")');
        this.esconder = page.locator('text=Hide products');
    }

    async verificarListaDeDesejos() {
        await this.botaoAbrir.click();
    }

    async verificarSeAOpcaoDeEsconderProdutosEhVisivel() {
        await expect(this.esconder).toBeVisible();
    }
}

module.exports = { ListaDesejo };