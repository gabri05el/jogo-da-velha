alert("O Jogo Começa com o X")

var jogador = "X";

function joga(quadrado) {
    if(quadrado.innerHTML == "") {
        quadrado.innerHTML = jogador;
        if(jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X";
        }
    }
}

function reinicia() {
    window.location.reload();
}
