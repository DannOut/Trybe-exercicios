import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.handleClickUp = this.handleClickUp.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this)

    this.state = {
      numeroDeCliques: 0,
      diminuindoCliques: 100,
    };
  }

  handleClickUp() {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    //------------------------------------------//
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  handleClickDown() {
    this.setState((estadoAnterior, _props) => ({
      diminuindoCliques: estadoAnterior.diminuindoCliques - 1,
    }));
  }

  render() {
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    return (
      <div>
        {' '}
        <div>
        <button onClick={this.handleClickUp}>
          {' '}
          {this.state.numeroDeCliques}
        </button>
        </div>
        <div>
        <button onClick={this.handleClickDown}>
          {' '}
          {this.state.diminuindoCliques}
        </button>
        </div>
      </div>
    );
  }
}

export default App;
