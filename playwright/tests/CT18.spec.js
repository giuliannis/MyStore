const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Adicionar um produto a lista de desejos', async ({ page }) => {

    //Dado que um cliente que deseja buscar por um item acessou o site da loja “My Store”
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();

    //Quando ele inserir o nome do item na busca geral do site
    let loja = new Loja(page);

    const blusa = 'Blouse';

    await loja.realizarBusca(blusa);


    //Então os itens com o nome buscado deverão ser listados 
    await loja.abrirOProdutoBlusa();
    await loja.adicionarItemAListaDeDesejos();
});