const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Escolher uma opção de frete', async ({ page }) => {

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

    //E que prosseguiu para encerrar a compra 
    await loja.finalizarCompra();
    await loja.continuarFinalizacaoDaCompra();

    //Quando as opções de fretes forem listadas
    const op = '666065';

    await loja.selecionarOEndereco(op);
    await loja.clicarEmProsseguirFinalizacaoDaCompra();

    //Então será possível escolher uma das opções de frete disponíveis 
    await loja.verificarSeEstaNaAbaDeFrete();
});