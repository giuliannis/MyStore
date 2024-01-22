const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { MinhaConta } = require('../support/pages/MinhaConta/index');
const { Uteis } = require('../support/uteis');


test('Realizar login com uma conta nova', async ({ page }) => {

    let autenticacao = new Autenticacao(page);

    // Dado que um cliente sem conta acessou o site da loja “My Store”
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    // Quando ele inserir o e-mail para criar uma conta
    const email = 'cliente'+Uteis.gerarValorAleatorio()+'novo@yopmail.com';

    await autenticacao.inserirEmailParaCriarUmaConta(email);
    await autenticacao.clicarEmCriarNovaConta();

    //E realizar o cadastro dos dados no formulário
    const nome = 'Mariana',
        sobrenome = 'Silva',
        senha = 'teste',
        endereco = 'Silver leaf, 10',
        cidade = 'Alabaster',
        valorEstado = '1',
        cep = '35007',
        celular = '55555555';

        await autenticacao.preencherNome(nome);
        await autenticacao.preencherSobrenome(sobrenome);
        await autenticacao.informarSenha(senha);
        await autenticacao.preencherEndereco(endereco);
        await autenticacao.preencherCidade(cidade);
        await autenticacao.selecionarEstado(valorEstado);
        await autenticacao.preencherCep(cep);
        await autenticacao.preencherCelular(celular);

    //Então a conta será criada com sucesso

    await autenticacao.clicarEmRegistrar();

    let minhaconta = new MinhaConta(page);
    await minhaconta.verificarSeEstaEmMinhaConta();

    // test.step('Dado que um cliente sem conta acessou o site da loja “My Store”', async () => {
    // });
});