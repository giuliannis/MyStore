const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Prosseguir para finalização da compra sem estar autenticado', async ({ page }) => {

    //Dado que o cliente não autenticado acessou o site da loja “My Store”
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();

    //Quando adicionar produtos ao carrinho
    let loja = new Loja(page);

    const vestido = 'Printed Summer Dress';

    await loja.realizarBusca(vestido);
    await loja.adicionarVestidoFloridoAoCarrinho();

    await loja.finalizarCompra();

    //Então ele terá que realizar o login ao finalizar a compra
    await loja.continuarFinalizacaoDaCompra();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();

});