let button = false;

function carregarDiv(){
let div = document.getElementById("meuamor")
if (!button) {
    div.innerHTML = `<h1>Guinness</h1>`;
    div.classList.add("effect");
} else {
    div.classList.remove("effect");
    div.addEventListener("transitionend", () => {
        if (!button) {
            div.innerHTML = ""; 
        }
    });
}

button = !button;
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", carregarDiv);
