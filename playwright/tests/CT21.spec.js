const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');

test('Garantir a inserção de um e-mail válido ao realizar o login', async ({ page }) => {

    //Dado que um cliente deseja logar no site MyStore
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    // Mas ele informou um e-mail inválido para realizar o login
    const email = '1234';

    await autenticacao.inserirEmail(email);

    //Quando ele prosseguir com o login
    await autenticacao.clicarEmEntrar();

    //Então o sistema retornará uma mensagem de erro
    await autenticacao.verificarSeAMensagemDeErroDoLoginEhIgual();
});