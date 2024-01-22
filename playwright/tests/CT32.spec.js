const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Filtrar catálogo de roupas por estilo', async ({ page }) => {

    //Dado que um cliente acessou o site da loja “My Store”
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();

    //E acessou o catálogo de roupas
    let loja = new Loja(page);
    await loja.acessarOCatalogoDeRoupasFemininas();

    //Quando filtrar as roupas a partir de seu estilo
    await loja.filtrarPorEstilo();

    //Então serão retornadas as roupas que estão disponíveis a venda no estilo filtrado
    const tituloFiltro = 'Women > Styles Casual';
    await loja.verificarSeOFiltroRetornouResultado(tituloFiltro);
});