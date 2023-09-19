let cervejas = [
    {
       name: "Guiness",
       alcohol: "10%",
       style: "Red Ale",
       ibu: "15"
    }, 
    {
       name: "Desperados",
       alcohol: "6%",
       style: "English IPA",
       ibu: "25"
    }, 
    {
       name: "Becks",
       alcohol: "5%",
       style: "Imperial Stout",
       ibu: "35"
    },
    {
      name: "Heineken",
      alcohol: "8%",
      style: "Cream Ale",
      ibu: "45"
   },
   {
    name: "Stella Artois",
    alcohol: "7%",
    style: "Lager",
    ibu: "55"
  },
  {
    name: "Budweiser",
    alcohol: "4%",
    style: "APA",
    ibu: "60"
  }
  ]
  
  //cs é um array de cervejas
  
  const carregarDiv = (cs, targetId = "cervejasDiv",  head = ["Nome", "Álcool", "Estilo", "Amargor"], prop = ["name", "alcohol", "style", "ibu"]) => {
    const tableStructure = document.getElementById(targetId);
    const tableHead = document.getElementById("tableHead");
  
    tableHead.innerHTML = head.map(header => `<th>${header}</th>`).join("");
  
    const itemsHtml = cs.map(item => { 
        const itemProp = prop.map(obj => `<td>${item[obj]}</td>`).join("");
        return `<tr>${itemProp}</tr>`;
    });
    
    tableStructure.innerHTML = `${itemsHtml.join("\n")}`;
  }
  
  let botao = document.getElementById("botaoCarregar");
  botao.addEventListener("click", () => carregarDiv(cervejas, "tableProp",));