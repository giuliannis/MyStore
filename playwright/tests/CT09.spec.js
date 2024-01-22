const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Finalizar uma compra', async ({ page }) => {

    //Dado que o cliente adicionou itens ao carrinho
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();

    let loja = new Loja(page);

    const blusa = 'Blouse';

    await loja.realizarBusca(blusa);
    await loja.adicionarBlusaAoCarrinho();

    //Quando prosseguir para encerrar a compra 
    await loja.finalizarCompra();
    await loja.continuarFinalizacaoDaCompra();

    //E selecionar as informações necessárias para compra
    await loja.clicarEmProsseguirFinalizacaoDaCompra();
    await loja.selecionarTermoDeFrete();
    await loja.clicarEmProsseguirFinalizacaoDaCompra();
    await loja.selecionarFormaDePagamentoPorTransferencia();
    await loja.clicarEmConfirmarACompra();


    //Então o pedido deverá ser realizado com sucesso
    await loja.verificarSeACompraFoiConcluida();

});