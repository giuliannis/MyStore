const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Adicionar roupas ao carrinho de compras', async ({ page }) => {

    //Dado que um cliente acessou o site da loja “My Store”
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();

    //Quando adicionou ao carrinho alguns produtos da categoria popular
    let loja = new Loja(page);

    const vestido = 'Printed Summer Dress',
              blusa = 'Blouse';

    await loja.realizarBusca(blusa);
    await loja.adicionarBlusaAoCarrinho();
    await loja.continuarCompra();
    await loja.realizarBusca(vestido);
    await loja.adicionarVestidoFloridoAoCarrinho();
    await loja.continuarCompra();


    //Então os itens deverão estar disponíveis no carrinho
    await loja.abrirCarrinho();
    await loja.verificarSeOsItensEstaoNoCarrinho();
});