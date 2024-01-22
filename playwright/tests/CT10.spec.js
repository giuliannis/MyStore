const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Filtrar produtos por vestido', async ({ page }) => {

    let autenticacao = new Autenticacao(page);

    //Dado que um cliente que deseja comprar vestidos acessou o site da loja “My Store”
    await autenticacao.visitarMyStore();

    //Quando a aba de vestidos for acessada
    const loja = new Loja(page);

    await loja.abrirOMenuDeVestidos();

    //Então deverá ser exibido todos os vestidos disponíveis a venda na loja
    await loja.verificarSeEstaNaAbaDeVestidos();

});