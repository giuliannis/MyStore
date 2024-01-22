const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Informacoes } = require('../support/pages/InformacoesPessoais/index');
const { MinhaConta } = require('../support/pages/MinhaConta/index');

test('Garantir que o sistema impeça a atualização da senha do usuário ao informar a senha atual incorreta', async ({ page }) => {

    //Dado que o cliente deseja atualizar a senha
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();


    //Quando acessar o menu das informações pessoais para atualizar a senha
    let minhaconta = new MinhaConta(page);
    await minhaconta.irParaInformacoesPessoais();
 

    //Mas informar a senha errada ao prosseguir com a atualização
    let informacoes = new Informacoes(page);
    const senhaAtual = 'cliente',
        novaSenha = '123456',
        confirmacao = '123456';

    await informacoes.informeASenhaAtual(senhaAtual);
    await informacoes.informeNovaSenha(novaSenha);
    await informacoes.informeConfirmacaoSenha(confirmacao);
    await informacoes.clicarEmSalvar();

    //Então a senha não será atualizada
    await informacoes.verificarSeAMensagemDeErroEhIgual();

});