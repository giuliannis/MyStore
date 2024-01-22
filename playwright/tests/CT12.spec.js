const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { MinhaConta } = require('../support/pages/MinhaConta/index');
const { Historico } = require('../support/pages/HistoricoDeCompras/index');


test('Visualizar detalhes do pedido', async ({ page }) => {

    //Dado que o cliente deseja acompanhar os detalhes de um pedido
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();

    //Quando acessar o menu “Histórico de compra e detalhes”
    let minhaconta = new MinhaConta(page);

    await minhaconta.irParaHistoricosDeCompra();

    //Então uma lista contendo os últimos pedidos realizados será listada
    let historico = new Historico(page);

    await historico.verificarSeEstaEmHistoricoDeCompra();

});