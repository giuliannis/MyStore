const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');

test('Solicitar a redefinição de senha através da função “Esqueceu sua senha?”', async ({ page }) => {

    //Dado que um cliente deseja logar no site MyStore
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();

    //Mas esqueceu a senha que utilizaria para realizar o login
    await autenticacao.irParaPaginaDeLogin();

    //Quando a opção esqueceu sua senha for utilizada
    const email = 'giulianni@yopmail.com';

    await autenticacao.clicarEmEsqueceuASenha();
    await autenticacao.inserirEmailEmEsqueceuSenha(email);
    await autenticacao.clicarEmRecuperarSenha();

    //Então a senha deverá ser redefinida com sucesso
    await autenticacao.verificarSeAMensagemDeSucessoDaRecuperacaoEhIgual();
});