const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Filtrar catálogo de roupas por propriedade', async ({ page }) => {

    //Dado que um cliente acessou o site da loja “My Store”
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();

    //E acessou o catálogo de roupas
    let loja = new Loja(page);
    await loja.acessarOCatalogoDeRoupasFemininas();

    //Quando filtrar as roupas a partir de sua propriedade
    await loja.filtrarPorPropriedade();

    //Então serão retornadas as roupas que estão disponíveis a venda na propriedade filtrada
    const tituloFiltro = 'Women > Properties Midi Dress';
    await loja.verificarSeOFiltroRetornouResultado(tituloFiltro);
});