import React, { Component } from 'react'

export default class TextInformation extends Component {
  render() {
    const { value, sendInfoHandler } = this.props
    console.log(value);
    return (
      <textarea 
      onChange={sendInfoHandler} 
      value={value} 
      cols="30" rows="3" 
      placeholder='Opinião' 
      className='valorDigitado' 
      name="textInformation">
      </textarea>
    )
  }
}
