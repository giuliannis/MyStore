const { expect, locator } = require('@playwright/test');

class MinhaConta {
    /**
         * @param {import('playwright').Page} page 
         */
    constructor(page) {
        this.page = page;
        this.titulo = page.locator('h1:has-text("My account")');
        this.enderecos = page.locator('span:has-text("My addresses")');
        this.historico = page.locator('text=Order history and details');
        this.informacoes = page.locator('text=My personal information');
        this.credito = page.locator('span:has-text("My credit slips")');
        this.lista = page.locator('text=My wishlists');
    }

    async verificarSeEstaEmMinhaConta() {
        await expect(this.titulo).toHaveText('My account');
    }

    async irParaMeusEnderecos() {
        await this.enderecos.click();
    }

    async irParaHistoricosDeCompra() {
        await this.historico.click();
    }

    async irParaInformacoesPessoais() {
        await this.informacoes.click();
    }

    async irParaCreditoDeCompra() {
        await this.credito.click();
    }

    async irParaListasDeDesejos() {
        await this.lista.click();
    }
}

module.exports = { MinhaConta };