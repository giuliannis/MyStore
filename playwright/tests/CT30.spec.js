const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Filtrar catálogo de roupas por tipo de composição', async ({ page }) => {

    //Dado que um cliente acessou o site da loja “My Store”
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();

    //E acessou o catálogo de roupas
    let loja = new Loja(page);
    await loja.acessarOCatalogoDeRoupasFemininas();

    //Quando filtrar as roupas a partir de sua composição
    await loja.filtrarPorComposicao();

    //Então serão retornadas as roupas que estão disponíveis a venda na composição filtrada
    const tituloFiltro = 'Women > Compositions Cotton';
    await loja.verificarSeOFiltroRetornouResultado(tituloFiltro);
});