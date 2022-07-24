import React, { Component } from 'react';

export default class Email extends Component {
  render() {
    const { name, value, changeHandler, maxCharacterHandler } = this.props

    return (
      <div className="inputEmail inputs">
        <label htmlFor="inputEmail">
          Email: 
          <input 
          type="email" 
          name= {name} 
          id="inputEmail"
          value= {value} 
          onChange= {changeHandler}
          />
        </label>
        <span> {maxCharacterHandler(50, value)} </span>
      </div>
    );
  }
}
