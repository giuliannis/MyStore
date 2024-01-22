const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Visualizar detalhes de um produto', async ({ page }) => {

    //Dado que o cliente acessou o site MyStore
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    
    //E deseja ver detalhes de um produto
    let loja = new Loja(page);

    const blusa = 'Blouse';

    await loja.realizarBusca(blusa);

    //Quando abrir um dos produtos
    await loja.abrirOProdutoBlusa();

    //Então as informações a respeito dele serão exibidas
    await loja.verificarDetalhesDoProduto();
});