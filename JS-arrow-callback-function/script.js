const sorvetes = ["picole", "sorvete", "milkshake"];

const carregarDiv = (cervs) => {
  const div = document.getElementById("meu amor");
  const tabelaHtml = `
    <table id= "customers">
      <tr>
        <th>Cervejas</th>
      </tr>
      ${cervs.map(item => `<tr><td>${item}</td></tr>`).join("")}
    </table>`;
  div.innerHTML = tabelaHtml;

  const linkOrdenacao = document.getElementById("linkOrdenar");
  linkOrdenacao.style.display = "inline";

  const linkEmbaralhamento = document.getElementById("linkEmbaralhar");
  linkEmbaralhamento.style.display = "inline";
}

const ordenarCervejas = (cervs) => {
    cervs.sort();
    carregarDiv(cervs);
}

const embaralharCervejas = (cervs) => {
    cervs.sort(ordSorv = () => {return 0.3 - Math.random();});
    carregarDiv(cervs);
}

const linkCarregamento = document.getElementById("linkCarregar");
linkCarregamento.addEventListener("click", () => carregarDiv(sorvetes));

const linkOrdenacao = document.getElementById("linkOrdenar");
linkOrdenacao.addEventListener("click", () => ordenarCervejas(sorvetes));

const linkEmbaralhamento = document.getElementById("linkEmbaralhar");
linkEmbaralhamento.addEventListener("click", () => embaralharCervejas(sorvetes));