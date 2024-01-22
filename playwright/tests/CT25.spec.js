const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');


test('Garantir a inserção dos campos obrigatórios no cadastro de nova conta', async ({ page }) => {

    let autenticacao = new Autenticacao(page);

    //Dado que um cliente deseja criar uma conta nova no site MyStore
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    //Quando ele prosseguir com a criação da conta
    const email = 'novocliente@yopmail.com';

    await autenticacao.inserirEmailParaCriarUmaConta(email);

    //Mas não informar os campos obrigatórios para criar conta
    await autenticacao.clicarEmCriarNovaConta();
    await autenticacao.clicarEmRegistrar();

    //Então o sistema retornará uma mensagem de erro
    await autenticacao.verificarSeAMensagemDeAlertaDaCriacaoDeContaEhVisivel();
});