import React, { Component } from 'react'
import StatesData from  "../Data/StatesData"

export default class State extends Component {
  render() {
    const { name, value, changeHandler } = this.props
    const arrangeStatesInHtml = StatesData.map((state, index) => <option value={state} key={index}> {state}</option>)

    return (
      <div className="inputState inputs">
        <label htmlFor="inputState">
          Estado
        <select 
        name={name} 
        id="inputState"
        onChange={changeHandler}
        value={value}
        >
          <option value="">Selecione seu Estado</option>
          {arrangeStatesInHtml}
        </select>
        </label>
        </div>
    )
  }
}
