const { expect, locator } = require('@playwright/test');

class Informacoes {
    /**
         * @param {import('playwright').Page} page 
         */
    constructor(page) {
        this.page = page;
        this.dia = page.locator('select[name="days"]');
        this.botaoSalvar = page.locator('button:has-text("Save")');
        this.senha = page.locator('input[name="old_passwd"]');
        this.alerta = page.locator('.alert');
        this.alertaErroSenhaAtual = page.locator('text=The password you entered is incorrect.');
        this.novaSenha = page.locator('input[name="passwd"]');
        this.confirmacaoSenha = page.locator('input[name="confirmation"]');
        this.alertaErroConfirmacaoSenha = page.locator('text=The password and confirmation do not match.');
    }

    async atualizarDiaDaDataDeNascimento(op) {
        await this.dia.selectOption('');
        await this.dia.selectOption(op);
    }

    async informeASenhaAtual(text) {
        await this.senha.type(text);
    }

    async informeNovaSenha(text) {
        await this.novaSenha.type(text);
    }

    async informeConfirmacaoSenha(text) {
        await this.confirmacaoSenha.type(text);
    }

    async clicarEmSalvar() {
        await this.botaoSalvar.click();
    }

    async verificarSeAMensagemDeSucessoEhIgual() {
        await expect(this.alerta).toHaveText('            Your personal information has been successfully updated.');
    }

    async verificarSeAMensagemDeErroEhIgual() {
        await expect(this.alertaErroSenhaAtual).toBeVisible();
    }

    async verificarSeAMensagemDeErroDaConfirmacaoEhIgual() {
        await expect(this.alertaErroConfirmacaoSenha).toBeVisible();
    }
}

module.exports = { Informacoes };