/* Place your JavaScript in this file */
var botaoDaVerdade = document.getElementById("botao-da-verdade");
var noticiaEstranha = document.getElementById("imagem-noticia-muito-suspeita");
var mensagemElucidativa = document.getElementById("sub-heading-esclarecedor");
var mensagemSuspeita = document.getElementById("mensagem-suspeita");

function mostrarAVerdade() {
    noticiaEstranha.style.visibility = "visible";
    mensagemElucidativa.style.visibility = "visible";
    mensagemSuspeita.innerHTML = "Mais uma peça-chave que prova que o Felipe Neto é illuminatti..."
};

botaoDaVerdade.addEventListener('click', mostrarAVerdade);