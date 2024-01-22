const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');

test('Garantir a inserção da senha correta ao realizar o login', async ({ page }) => {

    //Dado que um cliente deseja logar no site MyStore
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    //Mas ele informou a senha incorreta para realizar o login
    const email = 'giulianni@yopmail.com',
        senha = 'cliente';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);

    //Quando ele prosseguir com o login
    await autenticacao.clicarEmEntrar();

    //Então o sistema retornará uma mensagem de erro
    await autenticacao.verificarSeAMensagemDeErroDaSenhaNoLoginEhIgual();
});