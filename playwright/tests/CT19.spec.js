const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { ListaDesejo } = require('../support/pages/ListasDeDesejos/index');
const { MinhaConta } = require('../support/pages/MinhaConta/index');

test('Visualizar a lista de desejos', async ({ page }) => {

    //Dado que o cliente deseja verificar os itens de uma lista de desejos
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();


    //Quando acessar o menu de lista de desejos
    let minhaconta = new MinhaConta(page);
    await minhaconta.irParaListasDeDesejos();
 

    //Então devem ser exibidos todos os itens favoritados anteriormente
    let listadesejo = new ListaDesejo(page);

    await listadesejo.verificarListaDeDesejos();
    await listadesejo.verificarSeAOpcaoDeEsconderProdutosEhVisivel();


});