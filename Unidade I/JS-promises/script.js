import { createTableUsers, createTableBeers } from "./createTable.js";


const tableDiv = document.getElementById("tableDiv");
const tableTwoDiv = document.getElementById("tableTwoDiv");


function carregarCervejas() {
  fetch("https://random-data-api.com/api/v2/beers?size=3")
    .then(res => res.json())
      .then(json => {
        const columns = ["name", "style", "brand", "hop", "ibu"];
        const table = createTableBeers(json, columns);
        tableTwoDiv.innerHTML = table;
      })
      .catch(err => document.getElementById("cervejasDiv").innerHTML = `Fudeu... ${err}`)

}

function carregarUsuarios() {
  fetch("https://random-data-api.com/api/v2/users?size=3")
    .then(res => res.json())
      .then(json => {
        const columns = ["id", "username", "email", "phone_number", "gender"];
        const table = createTableUsers(json, columns);
        tableDiv.innerHTML = table;
      })
      .catch(err => document.getElementById("cervejasDiv").innerHTML = `Fudeu... ${err}`)

}

function carregarFuncoes(){
  carregarCervejas();
  carregarUsuarios();
}

const botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", () => carregarFuncoes());    