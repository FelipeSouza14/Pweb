import { createTableUsers } from "./createTable.js";
import { createTableBeers } from "./createTable.js";

const tableDiv = document.getElementById("tableDiv");
const tableTwoDiv = document.getElementById("tableTwoDiv");


async function carregarCervejas() {
  try {
      const resp = await fetch("https://random-data-api.com/api/v2/beers?size=3");
      const beers = await resp.json();
      const columns = ["name", "style", "brand", "hop", "ibu"];
      const table = createTableBeers(beers, columns);

      tableTwoDiv.innerHTML = table;
  } catch (error) {
    tableTwoDiv.innerHTML = "<h1>Ocorreu um erro!</h1>";
  }
}

async function carregarUsuarios() {
    try {
        const resp = await fetch("https://random-data-api.com/api/v2/users?size=3");
        const users = await resp.json();
        const columns = ["id", "username", "email", "phone_number", "gender"];
        const table = createTableUsers(users, columns);

        tableDiv.innerHTML = table;
    } catch (error) {
      tableDiv.innerHTML = "<h1>Ocorreu um erro!</h1>";
    }
}

function carregarFuncoes(){
  carregarCervejas();
  carregarUsuarios();
}

const botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", () => carregarFuncoes());    