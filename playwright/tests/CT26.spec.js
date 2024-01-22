const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { MinhaConta } = require('../support/pages/MinhaConta/index');


test('Garantir que o cep informado siga as regras da quantidade de caracteres', async ({ page }) => {

    let autenticacao = new Autenticacao(page);

    //Dado que um cliente deseja criar uma conta nova no site MyStore
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    //Quando ele prosseguir com a criação da conta
    const email = 'novocliente@yopmail.com';

    await autenticacao.inserirEmailParaCriarUmaConta(email);
    await autenticacao.clicarEmCriarNovaConta();

    //Mas não informar um cep válido
    const nome = 'Matheus',
        sobrenome = 'Pereira',
        senha = '123456',
        endereco = '7th Street, 42',
        cidade = 'North Town',
        valorEstado = '6',
        cep = '7568907',
        celular = '555478994451';

    await autenticacao.preencherNome(nome);
    await autenticacao.preencherSobrenome(sobrenome);
    await autenticacao.informarSenha(senha);
    await autenticacao.preencherEndereco(endereco);
    await autenticacao.preencherCidade(cidade);
    await autenticacao.selecionarEstado(valorEstado);
    await autenticacao.preencherCep(cep);
    await autenticacao.preencherCelular(celular);

    await autenticacao.clicarEmRegistrar();

    //Então o sistema retornará uma mensagem de erro
    await autenticacao.verificarMensagemDeAlertaDoCepNaCriacaoDeConta();

});