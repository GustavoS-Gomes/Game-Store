    //contagem de jogos alugados 
function contarJogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}
function alterarStatus(id) {
    let clicGame = document.getElementById(`game-${id}`);
    let imagem = clicGame.querySelector('.dashboard__item__img');
    let botao = clicGame.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Se o jogo estiver alugado, perguntar antes de devolver
        let confirmar = confirm("Tem certeza que deseja devolver este jogo?");
        if (confirmar)
        imagem.classList.remove('dashboard__item__img--rented'); 
        // Remove o efeito escuro
        botao.textContent = 'Alugar'; 
        // Muda o texto do botão
        botao.classList.remove('dashboard__item__button--return'); 
        // Remove apenas a classe específica do botão
    } else {
        // Se o jogo estiver disponível, alugar
        imagem.classList.add('dashboard__item__img--rented'); 
        // Adiciona o efeito escuro
        botao.textContent = 'Devolver';     
    // Muda o texto do botão
        botao.classList.add('dashboard__item__button--return'); 
        // Adiciona apenas a classe específica do botão
    }
    // Chama a função sempre que um jogo for alugado ou devolvido
    contarJogosAlugados();
}


