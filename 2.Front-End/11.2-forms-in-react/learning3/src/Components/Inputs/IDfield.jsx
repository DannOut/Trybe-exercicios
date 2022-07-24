import React, { Component } from 'react'

export default class IDfield extends Component {
  render() {
    const { name, value, changeHandler, maxCharacterHandler } = this.props

    

    return (
      <div className="inputID inputs">
        <label htmlFor="inputID">
          CPF: 
          <input 
          type="text" 
          name= {name} 
          id="inputID"
          value= {value} 
          onChange= {changeHandler}
          />
        </label>
        <span> {maxCharacterHandler(11, value)} </span>
      </div>
    );
  }
}
