import React from 'react';
import Joke from './Joke.jsx';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.fetchJoke = this.fetchJoke.bind(this);
    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loadingPage: true,
      storedJokes: [],
    }
  }

//   async paramTester() {
//     const requestHeaders = { headers: { Accept: 'application/json' } }
//     const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
//     const requestObject = await requestReturn.json();
//     this.setState({
//       loadingPage: false,
//       jokeObj: requestObject
//     });
// }
  
  // é possível 
  async fetchJoke() {
    this.setState(
      { loadingPage: true }, // Primeiro parâmetro da setState()!
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        loadingPage: false,
        jokeObj: requestObject
      });
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));

    this.fetchJoke();
  }

  render() {
    const { storedJokes, loadingPage, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

          {
            loadingPage
              ? loadingElement
              : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
          }

      </div>
    );
  }
}

export default DadJoke;