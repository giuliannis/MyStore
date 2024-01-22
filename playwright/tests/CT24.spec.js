const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');


test('Garantir a validação de um e-mail já utilizado para a criação de uma nova conta', async ({ page }) => {

    let autenticacao = new Autenticacao(page);

    //Dado que um cliente sem conta acessou o site da loja “My Store”
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    //Mas ele informou um e-mail já utilizado para criar conta
    const email = 'giulianni@yopmail.com';

    await autenticacao.inserirEmailParaCriarUmaConta(email);

    //Quando ele prosseguir com a criação da conta
    await autenticacao.clicarEmCriarNovaConta();

    //Então o sistema retornará uma mensagem de erro
    await autenticacao.verificarMensagemDeErroDoEmailJaUtilizado();
});