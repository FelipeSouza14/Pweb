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
  
  const colunasAnimes = ["Nome", "Personagem", "Principal", "Gênero", "Crítica ☆"];
  
  const TabelaAnimes = ({titulo, cabecalho, conteudo}) => {
    return (
      <div>
        <h1 id="titulo">{titulo}</h1>
  
        <table id="tabela" border="1">
          <thead>
            <tr>
              {
                cabecalho.map(
                  item => <th>{item}</th>
                )
              }
            </tr>
          </thead>
          <tbody>
              {
                conteudo.map(
                  item => 
                  <tr>
                    <td>{item.nome}</td>
                    <td>{item.principal}</td>
                    <td><img class="imagens" src={item.imagem} alt={item.principal}></img></td>
                    <td>{item.genero}</td>
                    <td>{item.critica}</td>
                  </tr>
                )
              }
          </tbody>
        </table>
      </div>
    )
  }
  
  
  ReactDOM.render(
      <TabelaAnimes titulo="Minha Tabela de Animes" cabecalho={ colunasAnimes } conteudo={ animesArray } />,
    
    document.getElementById("app"))