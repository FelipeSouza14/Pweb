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
  
  const cervejasArray = [
    {
      nome: "Guiness",
      alcohol: "10%",
      style: "Red Ale",
      ibu: "15"
    }, 
    {
      nome: "Desperados",
      alcohol: "6%",
      style: "English IPA",
      ibu: "25"
    }, 
    {
      nome: "Becks",
      alcohol: "5%",
      style: "Imperial Stout",
      ibu: "35"
    },
    {
      nome: "Heineken",
      alcohol: "8%",
      style: "Cream Ale",
      ibu: "45"
    },
    {
      nome: "Stella Artois",
      alcohol: "7%",
      style: "Lager",
      ibu: "55"
    },
    {
      nome: "Budweiser",
      alcohol: "4%",
      style: "APA",
      ibu: "60"
    },
  ];
  
  const colunasAnimes = ["Nome", "Personagem", "Principal", "Gênero", "Crítica ☆"];
  const colunasBebidas = ["Nome", "Alcool", "Estilo", "Ibu"];
  
  
  class TabelaBebidas extends React.Component {
    render() {
      return (
        <div>
          <table id="tabela" border="1">
          <thead>
            <tr>
              {colunasBebidas.map(
                item => <th>{item}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {cervejasArray.map(
              item => 
                <tr>
                  <td>{item.nome}</td>
                  <td>{item.alcohol}</td>
                  <td>{item.style}</td>
                  <td>{item.ibu}</td>
                </tr>
              )}
          </tbody>
          </table>
        </div>
      );
    }
  }
  
  class TabelaAnimes extends React.Component {
    render() {
      return (
        <div>
          <table id="tabela" border="1">
          <thead>
            <tr>
              {colunasAnimes.map(
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
          </tbody>
          </table>
        </div>
      );
    }
  }
  
  class NewNavBar extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        tabelaSelecionada: null,
      };
    }
  
    exibirTabela(tabela){
      this.setState({
        tabelaSelecionada: tabela,
      });
    }
  
    render(){
      let tabela;
      
      if (this.state.tabelaSelecionada === 'bebidas') {
        tabela = <TabelaBebidas />;
      } else if (this.state.tabelaSelecionada === 'animes') {
        tabela = <TabelaAnimes />;
      }
  
      return (
        <div>
          <nav id="navBar">
            <button class="botao" onClick={() => this.exibirTabela('bebidas')}>Tabela de Bebidas</button>
            <button class="botao" onClick={() => this.exibirTabela('animes')}>Tabela de Animes</button>
          </nav>
          {tabela}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <div>
      <NewNavBar />
    </div>,
    document.getElementById("app")
  );  