const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Credito } = require('../support/pages/CreditoDeCompra/index');
const { MinhaConta } = require('../support/pages/MinhaConta/index');

test('Visualizar o crédito de compra', async ({ page }) => {

    //Dado que o cliente deseja verificar o crédito recebido por compra cancelada
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();


    //Quando acessar o menu de crédito de compra
    let minhaconta = new MinhaConta(page);
    await minhaconta.irParaCreditoDeCompra();
 

    //Então deve ser exibido as informações sobre crédito de compras canceladas
    let credito = new Credito(page);
    await credito.verificarSeOMenuCreditoEstaAberto();

});