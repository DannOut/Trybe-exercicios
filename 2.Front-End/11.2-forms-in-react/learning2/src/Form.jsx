import { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(){
    super()

    this.sendInfoHandler = this.sendInfoHandler.bind(this)
    // this.updateHandler = this.sendInfoHandler.bind(this)
    this.state = {
      valorDigitado: "",
      animeChoice: "",
      buttonStatus: true,
    }
  }

  sendInfoHandler(event) {
    // const { name, value } = event.target
    // this.setState({ [name]: value}, () => {
      const  { name: stateName , value, classList } = event.target
      this.setState({[stateName]:value}, () => {
      const { valorDigitado, animeChoice } = this.state
      const buttonChecker = valorDigitado.length === 0 || animeChoice.length === 0;
      this.setState({
        buttonStatus: buttonChecker
      })
    })
    console.log(classList.item[0]);
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
    const { animeChoice, valorDigitado, buttonStatus } = this.state
    return (
      <form className="form" method="get">

        <select name="animeChoice" className='animeChoice' value={animeChoice} onChange={this.sendInfoHandler}>
          <option value=""> Choose </option>
          <option value="naruto">Naruto</option>
          <option value="bleach">Bleach</option>
          <option value="hunterxhunter">Hunter X Hunter</option>
          <option value="gantz">Gantz</option>
          <option value="onePiece">One Piece</option>
          <option value="dbz">Dragon Ball Z</option>
        </select>
        <textarea 
        onChange={this.sendInfoHandler} cols="30" rows="3" placeholder='Opinião' className='valorDigitado' value={valorDigitado} name="valorDigitado"></textarea>
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