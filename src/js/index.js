// - Passo 1 - dar um jeito de pegar o elemento do HTML dos botões

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes");

// -Passo 2 - dar um jeito de identificar o clique do usúario no botão

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // - Passo 3 - desmacar o botão selecionado anterior
        desativarBotaoSelecionado();

        // - Passo 4 - marcar o botão clicado como se estivesse selecionado

        marcarBotaoSelecionado(botao);

        // - Passo 5 - esconder a imagem anterior mente selecionado

        esconderImagemAtiva();

        // - Passo 6 - fazer aparecer a imagem correspondente ao botão clicado

        mostrarImagemDeFundo(indice);

        // - Passo 7 - esconder a imformação do dragão anteriormente selecionado

        esconderInformacoesAtivas();

        // - Passo  8 - mostrar as imformação do dragão referente ao botaão clicado

        mostrarInformacoes(indice);
    });
});

function esconderInformacoesAtivas() {
    esconderAsIformacoesAtivas();
}

function mostrarInformacoes(indice) {
    marcarBotaoSelecionado(indice);
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function marcarBotaoSelecionado(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderAsIformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa"); imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

