const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');

test('Garantir a inserção de um e-mail válido ao criar conta', async ({ page }) => {

    //Dado que um cliente deseja criar uma conta
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    // Mas ele informou um e-mail inválido para criar a conta
    const email = '1234';

    await autenticacao.inserirEmailParaCriarUmaConta(email);

    //Quando ele prosseguir com a criação da conta
    await autenticacao.clicarEmCriarNovaConta();

    //Então o sistema retornará uma mensagem de erro
    await autenticacao.verificarSeAMensagemDeErroDaNovaContaEhIgual();
});