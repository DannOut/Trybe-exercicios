import React, { Component } from 'react'
import Name from './Inputs/Name'

export default class Fieldset extends Component {
  
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind(this)
    this.state = {
      nameField: '',
    }
  }

  changeHandler({ target }) {
    const { name, value } = target
    
    this.setState({[name]: value})

  }



  render() {
    const maxNameLenght = 5
    const { nameField } = this.state
    return (
      <fieldset>
        <Name maxLength={maxNameLenght} name='nameField' value={nameField} changeHandler={this.changeHandler} />
      </fieldset>
    )
  }
}
