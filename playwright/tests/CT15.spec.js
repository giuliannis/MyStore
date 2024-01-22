const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Informacoes } = require('../support/pages/InformacoesPessoais/index');
const { MinhaConta } = require('../support/pages/MinhaConta/index');

test('Atualizar o cadastro do cliente', async ({ page }) => {

    //Dado que o cliente deseja atualizar um dado
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();


    //Quando acessar o menu de informações pessoais para atualizar o dado
    let minhaconta = new MinhaConta(page);
    await minhaconta.irParaInformacoesPessoais();
 

    //Então a informação será atualizada com sucesso
    let informacoes = new Informacoes(page);
    const op = '10',
        senhaAtual = '123456';

    await informacoes.atualizarDiaDaDataDeNascimento(op);
    await informacoes.informeASenhaAtual(senha);
    await informacoes.clicarEmSalvar();

    await informacoes.verificarSeAMensagemDeSucessoEhIgual();

});