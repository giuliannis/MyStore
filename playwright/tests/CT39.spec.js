const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Escolher a quantidade do produto para compra', async ({ page }) => {

    //Dado que o cliente acessou o site MyStore
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    
    //Quando abrir um dos produtos
    let loja = new Loja(page);

    const blusa = 'Blouse';

    await loja.realizarBusca(blusa);
    await loja.abrirOProdutoBlusa();
    const quantidade = '2';
    await loja.adicionarQuantidadeDoProduto(quantidade);
    await loja.adicionarItemAoCarrinho();

    //Então será possível comprar o produto em mais de uma quantidade
    await loja.verificarQuantidadeDoProdutoAdicionada(quantidade);
});