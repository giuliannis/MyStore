const { expect, locator } = require('@playwright/test');

class Autenticacao {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.login = page.locator('.login');
        this.email = page.locator('input[name="email_create"]');
        this.botaoNovaConta = page.locator('button:has-text("Create an account")');
        this.primeiroNome = page.locator('input[name="customer_firstname"]');
        this.sobrenome = page.locator('input[name="customer_lastname"]');
        this.senha = page.locator('input[name="passwd"]');
        this.endereco = page.locator('input[name="address1"]');
        this.complemento = page.locator('input[name="address2"]');
        this.cidade = page.locator('input[name="city"]');
        this.estado = page.locator('select[name="id_state"]');
        this.cep = page.locator('input[name="postcode"]');
        this.celular = page.locator('input[name="phone_mobile"]');
        this.registrar = page.locator('button:has-text("Register")');
        this.emailLogin = page.locator('text=Email address Password Forgot your password? Sign in >> input[name="email"]');
        this.senhaLogin = page.locator('input[name="passwd"]');
        this.entrar = page.locator('button:has-text("Sign in")');
        this.mensagemErroContaNova = page.locator('#create_account_error');
        this.mensagemErroNoLogin = page.locator('text=There is 1 error Invalid email address.');
        this.mensagemErroSenha = page.locator('text=There is 1 error Authentication failed.');
        this.botaoEsqueceuSenha = page.locator('text=Forgot your password?');
        this.emailEsqueceuSenha = page.locator('text=Email address Retrieve Password >> input[name="email"]');
        this.botaoRecuperarSenha = page.locator('button:has-text("Retrieve Password")');
        this.mensagemSucessoRecuperacao = page.locator('.alert');
        this.mensagemErroCriacaoConta = page.locator('.alert');
    }

    async visitarMyStore() {
        await this.page.goto('http://automationpractice.com/index.php');
    }

    async irParaPaginaDeLogin() {
        await this.login.click();
    }

    async inserirEmailParaCriarUmaConta(text) {
        await this.email.fill(text);
    }

    async clicarEmCriarNovaConta() {
        await this.botaoNovaConta.click();
    }

    async preencherNome(text) {
        await this.page.waitForLoadState('networkidle');
        await this.primeiroNome.click();
        await this.primeiroNome.type(text, { slow: 100 });
    }

    async preencherSobrenome(text) {
        await this.page.waitForLoadState('networkidle');
        await this.sobrenome.click();
        await this.sobrenome.type(text, { slow: 100 });
    }

    async informarSenha(text) {
        await this.senha.click();
        await this.senha.fill(text);
    }

    async preencherEndereco(text) {
        await this.endereco.click();
        await this.endereco.fill(text);
    }

    async preencherCidade(text) {
        await this.cidade.click();
        await this.cidade.fill(text);
    }

    async selecionarEstado(op) {
        await this.estado.selectOption(op);
    }

    async preencherCep(text) {
        await this.cep.click();
        await this.cep.fill(text);
    }

    async preencherCelular(text) {
        await this.celular.click();
        await this.celular.fill(text);
    }

    async clicarEmRegistrar() {
        await this.registrar.click();
    }

    async inserirEmail(text) { 
        await this.emailLogin.fill(text);
    }

    async inserirSenha(text) {
        await this.senhaLogin.fill(text);
    }

    async clicarEmEntrar() {
        await this.entrar.click();
    }

    async verificarSeAMensagemDeErroDaNovaContaEhIgual() {
        await expect(this.mensagemErroContaNova).toHaveText('Invalid email address.');
    }

    async verificarSeAMensagemDeErroDoLoginEhIgual() {
        await expect(this.mensagemErroNoLogin).toBeVisible();
    }

    async verificarSeAMensagemDeErroDaSenhaNoLoginEhIgual() {
        await expect(this.mensagemErroSenha).toBeVisible();
    }

    async clicarEmEsqueceuASenha() {
        await this.botaoEsqueceuSenha.click();
    }

    async inserirEmailEmEsqueceuSenha(text) {
        await this.emailEsqueceuSenha.fill(text);
    }

    async clicarEmRecuperarSenha() {
        await this.botaoRecuperarSenha.click();
    }

    async verificarSeAMensagemDeSucessoDaRecuperacaoEhIgual() {
        await expect(this.mensagemSucessoRecuperacao).toHaveText('A confirmation email has been sent to your address: giulianni@yopmail.com');
    }

    async verificarMensagemDeErroDoEmailJaUtilizado() {
        await expect(this.mensagemErroContaNova).toHaveText('An account using this email address has already been registered. Please enter a valid password or request a new one. ');
    }

    async verificarSeAMensagemDeAlertaDaCriacaoDeContaEhVisivel() {
        await expect(this.mensagemErroCriacaoConta).toBeVisible();
    }

    async verificarMensagemDeAlertaDoCepNaCriacaoDeConta() {
        await expect(this.mensagemErroCriacaoConta).toBeVisible();
    }
}


module.exports = { Autenticacao };