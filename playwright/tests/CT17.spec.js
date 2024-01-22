const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Realizar busca por produtos na caixa de busca do site', async ({ page }) => {

    //Dado que um cliente que deseja buscar por um item acessou o site da loja “My Store”
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();

    //Quando ele inserir o nome do item na busca geral do site
    let loja = new Loja(page);

    const busca = 'dress';

    await loja.realizarBusca(busca);


    //Então os itens com o nome buscado deverão ser listados 
    await loja.verificarSeABuscaRetornouResultado();
});