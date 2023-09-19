const cervejas = ["Guiness", "Desperados", "Becks"];

function transformar(item){
  return `<tr><td>${item}</td></tr>`;
}

function carregarDiv() {
  const div = document.getElementById("meu amor");
  const tabelaHtml = `
    <table id= "customers">
      <tr>
        <th>Cervejas</th>
      </tr>
      ${cervejas.map(transformar).join("")}
    </table>`;
  div.innerHTML = tabelaHtml;

  const botaoOrdenacao = document.getElementById("botaoOrdenar");
  botaoOrdenacao.style.display = "inline";

  const botaoEmbaralhamento = document.getElementById("botaoEmbaralhar");
  botaoEmbaralhamento.style.display = "inline";
}

function ordenarCervejas(){
  cervejas.sort();
  carregarDiv();
  
}

function embaralharCervejas() {
  cervejas.sort(function(){return 0.3 - Math.random();})
  carregarDiv()
}

const botaoCarregamento = document.getElementById("botaoCarregar");
botaoCarregamento.addEventListener("click", carregarDiv);

const botaoOrdenacao = document.getElementById("botaoOrdenar");
botaoOrdenacao.addEventListener("click", ordenarCervejas);

const botaoEmbaralhamento = document.getElementById("botaoEmbaralhar");
botaoEmbaralhamento.addEventListener("click", embaralharCervejas);