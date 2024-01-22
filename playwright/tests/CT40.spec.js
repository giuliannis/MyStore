const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Escolher o tamanho de um produto para compra', async ({ page }) => {

    //Dado que o cliente acessou o site MyStore
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    
    //Quando abrir um dos produtos
    let loja = new Loja(page);

    const blusa = 'Blouse';

    await loja.realizarBusca(blusa);
    await loja.abrirOProdutoBlusa();
    const op = '2';
    await loja.selecionarTamanho(op);
    await loja.adicionarItemAoCarrinho();

    //Então será possível comprar o produto por tamanhos diferentes
    await loja.verificarSeOTamanhoDoProdutoEhM();
});