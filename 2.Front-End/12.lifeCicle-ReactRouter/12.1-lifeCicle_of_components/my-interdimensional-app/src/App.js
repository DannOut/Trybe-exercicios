// App.js
import React, { Component }from 'react';
import './App.css';

// criando classe APP
class App extends Component {
  // chamando o construtor e criando o state characters do qual é um array vazio
  constructor(){
    super();
    this.state = {
        characters: [],
    };
  }
  // criando a função fetchCharacters do qual vai fazer a requisição à API
  fetchCharacters = () => {
    // realizando o fetch
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }
  // primeira maneira
  // chamando a função FechCharacters dentro de componentDidMount
  componentDidMount() {
    this.fetchCharacters();
  }

  //Segunda Maneira
  // fazendo tudo diretamente dentro da componentDidMount
  // componentDidMount() {
  //   fetch('https://rickandmortyapi.com/api/character')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({characters: data.results})
  //   })
  // }


  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })
          }
          {/* {console.log(characters)} */}
        </div>
      </div>
    );
  }
}

export default App;
