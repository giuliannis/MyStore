const { expect, locator } = require('@playwright/test');

class Loja {
    /**
         * @param {import('playwright').Page} page 
         */
    constructor(page) {
        this.page = page;
        this.cardBlusa = page.locator('#center_column a:has-text("Blouse")');
        this.addCart = page.locator('button:has-text("Add to cart")');
        this.continue = page.locator('text=Continue shopping');
        this.cardVestido = page.locator('a:has-text("Printed Summer Dress")').nth(3);
        this.vestidoFlorido = page.locator('#product_5_19_0_0 >> text=Printed Summer Dress').first();
        this.blusa = page.locator('#product_2_7_0_0 >> text=Blouse');
        this.carrinho = page.locator('b:has-text("Cart")');
        this.caixaBusca = page.locator('[placeholder="Search"]');
        this.pesquisa = page.locator('button:has-text("Search")');
        this.fechar = page.locator('text=Proceed to checkout');
        this.continueFechar = page.locator('#center_column >> text=Proceed to checkout');
        this.botaoProsseguir = page.locator('button:has-text("Proceed to checkout")');
        this.endereco = page.locator('h1:has-text("Addresses")');
        this.meuEndereco = page.locator('select[name="id_address_delivery"]');
        this.frete = page.locator('h1:has-text("Shipping")');
        this.termo = page.locator('input[name="cgv"]');
        this.pagamentoTransferencia = page.locator('text=Pay by bank wire (order processing will be longer)');
        this.botaoConfirma = page.locator('button:has-text("I confirm my order")');
        this.confirmacaoDePedido = page.locator('h1:has-text("Order confirmation")');
        this.menuVestidos = page.locator('#categories_block_left >> text=Dresses').first();
        this.tituloVestidos = page.locator('h1 >> text=Dresses');
        this.menuCamisas = page.locator('text=T-shirts').nth(1);
        this.tituloCamisas = page.locator('h1 >> text=T-shirts');
        this.menuMulheres = page.locator('#block_top_menu >> text=Women');
        this.totalCarrinho = page.locator('#cart_summary span:has-text("Total")');
        this.mensagemCarrinho = page.locator('.alert');
        this.resultado = page.locator('.product-count');
        this.addListaDesejo = page.locator('text=Add to wishlist');
        this.confirmaListaDesejo = page.locator('text=Added to your wishlist.');
        this.abraBlusa = page.locator('#center_column a:has-text("Blouse")');
        this.filtroTamS = page.locator('input[name="layered_id_attribute_group_1"]');
        this.resultadoFiltro = page.locator('.cat-name');
        this.filtroCor = page.locator('input[name="layered_id_attribute_group_8"]');
        this.filtroPreco = page.locator('#layered_price_slider div');
        this.filtroAtivo = page.locator('#enabled_filters');
        this.filtroComposicao = page.locator('input[name="layered_id_feature_5"]');
        this.filtroPropriedade = page.locator('input[name="layered_id_feature_20"]');
        this.pagamentoCheque = page.locator('text=Pay by check (order processing will be longer)');
        this.filtroEstilo = page.locator('input[name="layered_id_feature_11"]');
        this.painelInfo = page.locator('text=Data sheet');
        this.corBrancaBlusa = page.locator('#color_8');
        this.corBlusaNoCarrinho = page.locator('span:has-text("White, S")');
        this.quantidadeProduto = page.locator('input[name="qty"]');
        this.quantAdicionada = page.locator('#layer_cart_product_quantity');
        this.tamanho = page.locator('#group_1');
        this.tamanhoBlusaCarrinho = page.locator('span:has-text("Black, M")');
        this.avaliacao = page.locator('text=Be the first to write your review !');
        this.tituloAvaliacao = page.locator('input[name="title"]');
        this.comentarioAvaliacao = page.locator('textarea[name="content"]');
        this.botaoEnviarAvaliacao = page.locator('button[name="submitMessage"]');
        this.erroTituloAvaliacao = page.locator('text=Title is incorrect');
        this.erroComentarioAvaliacao = page.locator('text=Comment is incorrect');
        this.caixaAdicaoComentario = page.locator('text=Your comment has been added and will be available once approved by a moderator');
        this.primeiroVestido = page.locator('text=Quick view').first();
    }

    async realizarBusca(text) {
        await this.caixaBusca.click();
        await this.caixaBusca.fill('');
        
        await this.caixaBusca.type(text);
        await this.pesquisa.click();
    }

    async abrirOProdutoBlusa() {
        await this.abraBlusa.click();
    }

    async adicionarItemAListaDeDesejos() {
        await this.addListaDesejo.click();
        await expect(this.confirmaListaDesejo).toBeVisible();
    }

    async adicionarBlusaAoCarrinho() {
        await this.cardBlusa.click();
        await this.addCart.click();
    }

    async adicionarVestidoFloridoAoCarrinho() {
        await this.page.waitForLoadState('load');
        await this.cardVestido.click();
        await this.addCart.click();
    }

    async continuarCompra() {
        await this.continue.click();
    }

    async adicionarItemAoCarrinho() {
        await this.addCart.click();
    }

    async abrirCarrinho() {
        await this.carrinho.click();
    }

    async verificarSeOsItensEstaoNoCarrinho(){
        await expect(this.blusa).toHaveText('Blouse');
        await expect(this.vestidoFlorido).toHaveText('Printed Summer Dress');
    }

    async verificarSeABuscaRetornouResultado() {
        await expect(this.resultado).toBeVisible();
    }

    async verificarSeDetalhesDosItensEstaoVisiveis() {
        await expect(this.blusa).toHaveText('Blouse');
        await expect(this.totalCarrinho).toHaveText('Total');
    }

    async verificarSeAMensagemDoCarrinhoVazioEhIgual() {
        await expect(this.mensagemCarrinho).toHaveText('Your shopping cart is empty.');
    }

    async finalizarCompra() {
        await this.fechar.click();
    }

    async continuarFinalizacaoDaCompra() {
        await this.continueFechar.click();
    }

    async verificarSeEstaNaAbaDeEnderecos() {
        await expect(this.endereco).toHaveText('Addresses');
    }

    async selecionarOEndereco(op) {
        await this.meuEndereco.selectOption(op);

    }

    async clicarEmProsseguirFinalizacaoDaCompra() {
        await this.botaoProsseguir.click();
    }

    async verificarSeEstaNaAbaDeFrete() {
        await expect(this.frete).toHaveText('Shipping');
    }

    async selecionarTermoDeFrete() {
        await this.termo.check();
    }

    async selecionarFormaDePagamentoPorTransferencia() {
        await this.pagamentoTransferencia.click();
    }

    async selecionarFormaDePagamentoPorCheque() {
        await this.pagamentoCheque.click();
    }

    async clicarEmConfirmarACompra() {
        await this.botaoConfirma.click();
    }

    async verificarSeACompraFoiConcluida() {
        await expect(this.confirmacaoDePedido).toHaveText('Order confirmation');
    }

    async abrirOMenuDeVestidos() {
        await this.menuMulheres.click();
        await this.menuVestidos.click();
    }

    async verificarSeEstaNaAbaDeVestidos() {
        await expect(this.tituloVestidos).toHaveText('Dresses');
    }

    async abrirOMenuDeCamisas() {
        await this.menuCamisas.click();
    }

    async verificarSeEstaNaAbaDeCamisas() {
        await expect(this.tituloCamisas).toHaveText('T-shirts');
    }

    async acessarOCatalogoDeRoupasFemininas() {
        await this.menuMulheres.click();
    }

    async clicarNoFiltroDeTamanho() {
        await this.page.waitForLoadState('networkidle');
        await this.filtroTamS.check();
    }

    async clicarNoFiltroDeCor() {
        await this.filtroCor.click();
    }

    async verificarSeOFiltroRetornouResultado(text) {
        await this.page.waitForLoadState('load');
        await expect(this.resultadoFiltro).toHaveText(text);
    }

    async filtrarPorPreço() {
        await this.filtroPreco.click();
    }

    async verificarSeOFiltroEstaAtivo() {
        await expect(this.filtroAtivo).toBeVisible();
    }
    
    async filtrarPorComposicao() {
        await this.filtroComposicao.check();
    }

    async filtrarPorPropriedade() {
        await this.filtroPropriedade.check();
    }

    async filtrarPorEstilo() {
        await this.filtroEstilo.check();
    }

    async verificarDetalhesDoProduto() {
        await expect(this.painelInfo).toBeVisible();
    }

    async escolherABlusaDeCorBranca() {
        await this.corBrancaBlusa.click();
    }

    async verificarSeACorDoProdutoAdicionaEhBranca() {
        await expect(this.corBlusaNoCarrinho).toBeVisible();
    }

    async verificarSeOTamanhoDoProdutoEhM() {
        await expect(this.tamanhoBlusaCarrinho).toBeVisible();
    }

    async adicionarQuantidadeDoProduto(quant) {
        await this.quantidadeProduto.fill('');
        await this.quantidadeProduto.fill(quant);
    }

    async verificarQuantidadeDoProdutoAdicionada(quant) {
        await expect(this.quantAdicionada).toHaveText(quant)
    }

    async selecionarTamanho(op) {
        await this.tamanho.selectOption(op);
    }

    async escreverUmaAvaliacao() {
        await this.avaliacao.click();
    }

    async adicionarTituloAAvaliacao(text) {
        await this.tituloAvaliacao.fill(text);
    }

    async adicionarComentarioAAvaliacao(text) {
        await this.comentarioAvaliacao.fill(text);
    }

    async enviarAvaliacao() {
        await this.botaoEnviarAvaliacao.click();
    }

    async confirmarSeAvaliacaoFoiAdicionada() {
        await expect(this.caixaAdicaoComentario).toBeVisible();
    }

    async verificarSeAMensagemDeErroDoTituloEhVisivel() {
        await expect(this.erroTituloAvaliacao).toBeVisible();
    }

    async verificarSeAMensagemDeErroDoComentarioEhVisivel() {
        await expect(this.erroComentarioAvaliacao).toBeVisible();
    }
}

module.exports = { Loja };