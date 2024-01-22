const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Filtrar produtos por camisa', async ({ page }) => {

    let autenticacao = new Autenticacao(page);

    //Dado que um cliente que deseja comprar camisas acessou o site da loja “My Store”
    await autenticacao.visitarMyStore();

    //Quando a aba de camisas for acessada
    const loja = new Loja(page);

    await loja.abrirOMenuDeCamisas();

    //Então deverá ser exibido todos as camisas disponíveis a venda na loja
    await loja.verificarSeEstaNaAbaDeCamisas();

});