const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Filtrar catálogo de roupas por cor', async ({ page }) => {

    //Dado que um cliente acessou o site da loja “My Store”
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();

    //E acessou o catálogo de roupas
    let loja = new Loja(page);
    await loja.acessarOCatalogoDeRoupasFemininas();

    //Quando filtrar as roupas por cor
    await loja.clicarNoFiltroDeCor();

    //Então serão retornadas as roupas que estão disponíveis a venda naquela cor
    const tituloFiltro = 'Women > Color White';
    await loja.verificarSeOFiltroRetornouResultado(tituloFiltro);
});