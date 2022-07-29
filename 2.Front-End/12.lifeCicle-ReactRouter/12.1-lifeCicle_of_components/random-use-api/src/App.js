import React, { Component } from 'react';

// criando uma variavel que será usada apenas para setar o valor inicial de cada state
const INITIAL_STATE = {
  gender: undefined,
  name: {
    title: undefined,
    first: undefined,
    last: undefined,
  }
}

export default class App extends Component {
  // setamos o valor inicial de state realizando um spread de toda a informação que existe dentro do INITIAL_STATE
  state = {...INITIAL_STATE, loadingPage: true };

  fetchURL = async () => {
    // criei uma conta com a string da API
    const URL = 'https://api.randomuser.me';
    // fiz um fetch para fazer a requisição inicial da API, do qual retorna uma promise
    const fetched = await fetch(URL);
    // fiz um .json para retonar toda a informação dentro da promise
    const data = await fetched.json();
    // estou apenas setando daonde eu quero os meus valores, baseada na informação recebida da API ( regra de negocio)
    const values = await data.results[0];
    // setando o this stage inicial, para ser a ultima coisa a ser realizada, no caso o booleano do loadingpage, caso o loadingpage seja verdadeiro, carregara uma página de loading, caso seja falso, exibira as informações que queremos.
    this.setState({
      // veja que no estado inicial da aplicação, o loadingpage é true, pois enquanto a requisição é feita, queremos que uma tela de loading apareça, após a requisição abaixo dessa termine, setamos o loadingpage para false, para assim podermos ter a garantia que toda a informação foi recupada no momento da renderização
      loadingPage: false,
      // estamos usando o segundo parametro do setState para recuparar as informações que queremos, no caso o gender e um spread operator para recuperar tudo dentro do objeto name
    }, () => {
      const { ...name } = values
      this.setState({
        gender: values.gender,
        ...name
      })
    });
  };
    // chamando a função componentDidmount para realizar a atualização da função criada acima, chamamos a didMOunt para termos a garandia que iremos ter as informações necessárias antes que a página seja renderizada
  componentDidMount() {
    this.setState({
      randomPerson: this.fetchURL(),
    });
  }
  // abaixo estamos rendereizando as informações obtidas acima
  render() {
    const {loadingPage, gender, name:{ title, first, last } } = this.state;
    const loadingHtmlElement = <span>Loading...</span>


    return (
      <div>
        {/* ternário que caso ainda esteja sendo realizado a coleta de informações, chama a variavel loadingPage, caso contrario chama loadingHtmlElement */}
        {/* se loading for true, carregar o loadding, quando for false carregar o gender */}
        {(loadingPage) 
        ? loadingHtmlElement 
        : (
          <div>
            <p> Hello! my name is {first} {last} </p>
            <p> people say that i'm a {title} {gender}</p>
          </div>  
        )}
      </div>
    );
  }
}
