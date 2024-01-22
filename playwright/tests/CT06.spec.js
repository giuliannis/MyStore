const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { MeusEnderecos } = require('../support/pages/MeusEnderecos/index');
const { MinhaConta } = require('../support/pages/MinhaConta/index');
const { Uteis } = require('../support/uteis');


test('Cadastrar um novo endereço', async ({ page }) => {

    //Dado que o cliente deseja cadastrar um novo endereço
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();

    //Quando acessar o menu “Meu endereço”
    let minhaconta = new MinhaConta(page);
    await minhaconta.irParaMeusEnderecos();

    //Então será capaz de cadastrar um novo endereço com sucesso
    let meusenderecos = new MeusEnderecos(page);

    await meusenderecos.clicarAdicionarNovoEndereco();

    const endereco = 'Oak street, 91',
        cidade = 'Springfield',
        estado = '9',
        cep = '25022',
        celular = '45091352',
        alias = 'Endereco'+Uteis.gerarValorAleatorio();

    await meusenderecos.informarEndereco(endereco);
    await meusenderecos.informarCidade(cidade);
    await meusenderecos.selecionarEstado(estado);
    await meusenderecos.informarCep(cep);
    await meusenderecos.informarCelular(celular);
    await meusenderecos.informarAlias(alias);

    await meusenderecos.clicarNoBotaoSalvar();
    await meusenderecos.verificarSeEstaNaAbaDeEnderecos();

});