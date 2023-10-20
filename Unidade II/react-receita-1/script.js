const animesArray = [
    {
      nome: "One Piece",
      principal: "Monkey D. Luffy",
      genero: "Fantasia Científica",
      critica: "4.9 ☆",
      imagem: "./imagem/icone-luffy.jpg"
    },
    {
      nome: "Naruto",
      principal: "Naruto",
      genero: "Ficção de Aventura",
      critica: "4.7 ☆",
      imagem: "./imagem/icone-naruto.webp"
    },
    {
      nome: "Demon Slayer",
      principal: "Tanjiro",
      genero: "Fantasia Sombria",
      critica: "5.0 ☆",
      imagem: "./imagem/icone-tanjiro.jpg"
    },
    {
      nome: "Dragon Ball",
      principal: "Goku",
      genero: "Artes Marciais",
      critica: "4.5 ☆",
      imagem: "./imagem/icone-goku.jpg"
    },
  ];
  
  const colunas = ["Nome", "Personagem", "Principal", "Gênero", "Crítica ☆"];
  const botao = document.getElementById("botao");
  
  const TabelaAnimes = () => {
    return (
      <div id="app">
        <Cabecalho/>
        <table id="customers" border="1">
          <thead>
            <tr>
              {colunas.map(
                item => <th>{item}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {animesArray.map(
              item => 
                <tr>
                  <td>{item.nome}</td>
                  <td>{item.principal}</td>
                  <td><img class="imagens" src={item.imagem} alt={item.principal}></img></td>
                  <td>{item.genero}</td>
                  <td>{item.critica}</td>
                </tr>
              )}
            <tr>
  
            </tr>
          </tbody>
        </table>
      </div>
  );}
  
  const Cabecalho = () =>{
    return <h1 id="cabecalho">Minha tabela de Animes</h1>;
  }
  
  const carregarTabela = () =>{
    ReactDOM.render(
      <TabelaAnimes/>,
    
      document.getElementById("app"));
    
    carregarArray(animesArray);
  }
  
  botao.addEventListener("click", carregarTabela);