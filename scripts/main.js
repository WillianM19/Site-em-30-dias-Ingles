//Scroll da barra de navegação
var posAnterior = window.pageYOffset;
window.addEventListener("scroll", () => {
    var posAtual = window.pageYOffset;
    if (posAnterior > posAtual) {
    document.querySelector('header').style.transform = "translateY(0)"
    } else {
    document.querySelector('header').style.transform = "translateY(-100%)"
    }
  posAnterior = posAtual;
})