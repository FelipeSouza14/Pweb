let button = false;

function carregarDiv() {
  let div = document.getElementById("meuamor");

  if (!button) {
    div.innerHTML = "<h1>Guinness</h1>";
    div.style.opacity = "1";
  } else {
    div.style.opacity = "0";
    div.addEventListener("transitionend", () => {
      div.innerHTML = "";
    }, { once: true });
  }

  button = !button;
}

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", carregarDiv);