const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Garantir que uma avaliação de um produto não seja criada ao não informar o título', async ({ page }) => {

    //Dado que o cliente está avaliando um produto
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
    await loja.abrirOProdutoBlusa();

    //Mas não adicionou um título
    const comentario = 'Gostei muito do modelo da blusa, mas achei que o tecido muito fino o que deixa a roupa um pouco transparente';
    await loja.escreverUmaAvaliacao();
    await loja.adicionarComentarioAAvaliacao(comentario);

    //Quando a avaliação for enviada
    await loja.enviarAvaliacao();

    //Então o sistema retornará uma mensagem de erro
    await loja.verificarSeAMensagemDeErroDoTituloEhVisivel();

});