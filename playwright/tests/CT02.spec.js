const { test } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { MinhaConta } = require('../support/pages/MinhaConta/index');


test('Autenticar como cliente que já possui conta', async ({ page }) => {

    let autenticacao = new Autenticacao(page);

    //Dado que um cliente não autenticado acessou o site da loja “My Store”
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    //Quando ele inserir suas credenciais
    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();

    //Então será redirecionado para a página “Minha conta”
    let minhaconta = new MinhaConta(page);
    await minhaconta.verificarSeEstaEmMinhaConta();
});

