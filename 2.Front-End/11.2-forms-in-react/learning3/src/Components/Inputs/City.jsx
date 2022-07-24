import React, { Component } from 'react';

export default class City extends Component {
  render() {
    const { name, value, changeHandler, maxCharacterHandler } = this.props

    return (
      <div className="inputCity inputs">
        <label htmlFor="inputCity">
          City:  
          <input 
          type="text" 
          name= {name} 
          id="inputCity"
          value= {value} 
          onChange= {changeHandler}
          />
        </label>
        <span> {maxCharacterHandler(28, value)} </span>
      </div>
    );
  }
}