import { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(){
    super()

    this.sendInfoHandler = this.sendInfoHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.updateHandler = this.sendInfoHandler.bind(this)
    this.state = {
      valorTextArea: "",
      animeChoice: "",
      buttonStatus: true,
      otakuChecker: false,
    }
  }

  sendInfoHandler({ target }) {
      const  { name } = target
      const value = target.type === 'checkbox' ? target.checked : target.value
      this.setState({[name]:value}, () => {
      const { valorTextArea, animeChoice, otakuChecker } = this.state
      const buttonChecker = valorTextArea.length === 0 || animeChoice.length === 0 || otakuChecker === false
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
    const { animeChoice, valorTextArea, buttonStatus } = this.state
    return (
      <form className="form" method="get" onSubmit={this.handleSubmit}>

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
        onChange={this.sendInfoHandler} 
        cols="30" rows="3" 
        placeholder='Opinião' 
        className='valorDigitado' 
        value={valorTextArea} 
        name="valorTextArea">
        </textarea>

        <div>
        <label htmlFor="otakuChecker" >Otaku</label>
        <input 
        type="checkbox" 
        onChange={this.sendInfoHandler} 
        name="otakuChecker" 
        id="otakuChecker"/>
        </div>

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