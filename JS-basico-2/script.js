const cervejas = ["Guiness", "Desperados", "Becks"]

function transformar(item){
  for (item of cervejas){
    const itemTransformado = `
        <tr><td>${item}</td></tr>`;

    document.getElementById("customers").innerHTML += itemTransformado;
  }

}

// function transformar(item){

//   return

// }


function carregarDiv(){
  let div = document.getElementById("meu amor")
  let cervejasHtml = cervejas.map(transformar)
  div.innerHTML = `${cervejasHtml.join("\n")}`

}



let botao = document.getElementById("botaoCarregar")

botao.addEventListener("click", carregarDiv)