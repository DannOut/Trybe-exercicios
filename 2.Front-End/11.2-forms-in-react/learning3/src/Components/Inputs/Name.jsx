import React, { Component } from 'react'

export default class Name extends Component {
  render() {
    const { maxNameLenght, nameField, changeHandler, name } = this.props

    return (
      <div className='nome'>
      <label htmlFor="name">Nome: </label>
      <input type="text" 
      name={name}
      id="name" 
      value={nameField} 
      maxLength={maxNameLenght} 
      onChange={changeHandler} />
      </div>
    )
  }
}
