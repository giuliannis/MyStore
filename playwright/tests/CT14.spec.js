const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Visualizar o carrinho vazio', async ({ page }) => {

    //Dado que o cliente acessou o site da loja “My Store”
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();

    //Mas não havia adicionado itens ao carrinho
    let loja = new Loja(page);

    await loja.abrirCarrinho();


    //Então o carrinho deverá conter a mensagem “Sem produtos”
    await loja.verificarSeAMensagemDoCarrinhoVazioEhIgual();
});