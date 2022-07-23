import { Component } from 'react';
import './Form.css';
import AnimeChoice from './Components/AnimeChoice';
import TextInformation from './Components/TextInformation';
import OtakuChecker from './Components/OtakuChecker';

class Form extends Component {
  constructor(){
    super()

    this.sendInfoHandler = this.sendInfoHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.updateHandler = this.sendInfoHandler.bind(this)
    this.state = {
      textInformation: "",
      animeChoice: "",
      buttonStatus: true,
      otakuChecker: false,
    }
  }

  sendInfoHandler({ target }) {
      const  { name } = target
      const value = target.type === 'checkbox' ? target.checked : target.value
      this.setState({[name]:value}, () => {
      const { textInformation, animeChoice, otakuChecker } = this.state
      const buttonChecker = textInformation.length === 0 || animeChoice.length === 0 || otakuChecker === false
      this.setState({
        buttonStatus: buttonChecker
      })
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event)
    alert('otakera é noix do complexo colômbia')
  }

  // sendInfoHandler(event) {
  // const  { name: stateName , value } = event.target
  // this.setState({[stateName]:value})
  // // console.log(stateName);
  // // console.log('-----------');
  // // console.log(value);
  // // console.log('-----------');
  // // console.log(event.target);
  // }




  render() {
    const { animeChoice, textInformation, buttonStatus } = this.state
    return (
      <form className="form" method="get" onSubmit={this.handleSubmit}>

        <AnimeChoice value={animeChoice} sendInfoHandler={this.sendInfoHandler} />

        <TextInformation value={textInformation} sendInfoHandler={this.sendInfoHandler} />

        <OtakuChecker type={'checkbox'} sendInfoHandler={this.sendInfoHandler} />

        <button disabled={buttonStatus}>Send Information </button>
      </form>
    );
  }
}

export default Form;



// handleChange = ({ target }) => {
//   const { name, value } = target;
//   this.setState({
//     [name]: value,
//   });
// };