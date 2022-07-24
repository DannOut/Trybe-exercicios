import React, { Component } from 'react';

export default class Adress extends Component {
  render() {
    const { name, value, changeHandler, maxCharacterHandler } = this.props

    return (
      <div className="inputAdress inputs">
        <label htmlFor="inputAdress">
          Adress: 
          <input 
          type="text" 
          name= {name} 
          id="inputAdress"
          value= {value} 
          onChange= {changeHandler}
          />
        </label>
        <span> {maxCharacterHandler(200, value)} </span>
      </div>
    );
  }
}