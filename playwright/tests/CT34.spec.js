const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Informacoes } = require('../support/pages/InformacoesPessoais/index');
const { MinhaConta } = require('../support/pages/MinhaConta/index');

test('Informar senhas diferentes nos campos nova senha e confirmação ao atualizar a senha', async ({ page }) => {

    //Dado que o cliente deseja atualizar a senha
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();


    //Quando acessar o menu das informações pessoas para atualizar a senha
    let minhaconta = new MinhaConta(page);
    await minhaconta.irParaInformacoesPessoais();
 

    //E informou uma senha diferente da nova na confirmação de senha
    let informacoes = new Informacoes(page);
    const senhaAtual = '123456',
        novaSenha = 'cliente123',
        confirmacao = 'cliente1';

    await informacoes.informeASenhaAtual(senhaAtual);
    await informacoes.informeNovaSenha(novaSenha);
    await informacoes.informeConfirmacaoSenha(confirmacao);
    await informacoes.clicarEmSalvar();

    //Então a senha não será atualizada
    await informacoes.verificarSeAMensagemDeErroDaConfirmacaoEhIgual();

});