const { expect } = require('@playwright/test');

class MeusEnderecos {
    /**
         * @param {import('playwright').Page} page 
         */
    constructor(page) {
        this.page = page;
        this.novoEndereco = page.locator('text=Add a new address');
        this.endereco = page.locator('input[name="address1"]');
        this.cidade = page.locator('input[name="city"]');
        this.estado = page.locator('select[name="id_state"]');
        this.cep = page.locator('input[name="postcode"]');
        this.celular = page.locator('input[name="phone_mobile"]');
        this.botaoSalvar = page.locator('button:has-text("Save")');
        this.alias = page.locator('input[name="alias"]');
        this.abaEndereco = page.locator('h1:has-text("My addresses")');
        this.enderecoJaCadastrado = page.locator('text=Meu novo endereco').nth(1);
        this.botaoAtualizar = page.locator('span:has-text("Update")').nth(4);
    }

    async clicarAdicionarNovoEndereco() {
        await this.novoEndereco.click();
    }

    async informarEndereco(text) {
        await this.endereco.type('');
        await this.endereco.click();
        await this.endereco.type(text);
    }

    async informarCidade(text) {
        await this.cidade.click();
        await this.cidade.type(text);
    }

    async selecionarEstado(op) {
        await this.estado.selectOption(op);
    }

    async informarCep(text) {
        await this.cep.click();
        await this.cep.type(text);
    }

    async informarCelular(text) {
        await this.celular.click();
        await this.celular.type(text);
    }

    async informarAlias(text) {
        await this.alias.fill('');
        await this.alias.click();
        await this.alias.type(text);
    }

    async clicarNoBotaoSalvar() {
        await this.botaoSalvar.click();
    }

    async verificarSeEstaNaAbaDeEnderecos() {
        await expect(this.abaEndereco).toHaveText('My addresses');
    }

    async verificarSeEhOEnderecoASerAtualizado() {
        await expect(this.enderecoJaCadastrado).toHaveText('Meu novo endereco');
    }

    async clicarEmAtualizar() {
        await this.botaoAtualizar.click();
    }

}

module.exports = { MeusEnderecos };