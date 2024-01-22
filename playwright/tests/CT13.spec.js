const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Visualizar o carrinho', async ({ page }) => {

    //Dado que o cliente está realizando uma compra na loja “My Store”
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();

    //Quando adicionar itens ao carrinho
    let loja = new Loja(page);

    const vestido = 'Printed Summer Dress',
              blusa = 'Blouse';

    await loja.realizarBusca(blusa);
    await loja.adicionarBlusaAoCarrinho();
    await loja.finalizarCompra();


    //Então os itens adicionados devem estar disponíveis no carrinho
    await loja.verificarSeDetalhesDosItensEstaoVisiveis();
});