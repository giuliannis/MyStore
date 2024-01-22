const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Prosseguir para finalização da compra autenticado', async ({ page }) => {

    //Dado que o cliente já autenticado acessou o site da loja “My Store”
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();

    //Quando adicionar produtos ao carrinho
    let loja = new Loja(page);

    const blusa = 'Blouse';

    await loja.realizarBusca(blusa);
    await loja.adicionarBlusaAoCarrinho();

    await loja.finalizarCompra();

    //Então ele conseguirá finalizar a compra com sucesso

    await loja.continuarFinalizacaoDaCompra();
    await loja.verificarSeEstaNaAbaDeEnderecos();
});