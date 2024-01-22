const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { MeusEnderecos } = require('../support/pages/MeusEnderecos/index');
const { MinhaConta } = require('../support/pages/MinhaConta/index');

test('Atualizar um endereço já existente', async ({ page }) => {

    //Dado que o cliente deseja atualizar um endereço já cadastrado
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();

    let minhaconta = new MinhaConta(page);
    await minhaconta.irParaMeusEnderecos();


    //Quando acessar o endereço que será atualizado
    let meusenderecos = new MeusEnderecos(page);

    await meusenderecos.clicarEmAtualizar();

    //E informar o dado novo
    const endereco = 'Oak street, 200';

    await meusenderecos.informarEndereco(endereco);

    //Então o endereço será atualizado com sucesso
    await meusenderecos.clicarNoBotaoSalvar();
    await meusenderecos.verificarSeEstaNaAbaDeEnderecos();
});