import React, { Component } from 'react'

export default class OtakuChecker extends Component {
  render() {
    return (
      <div>
      <label htmlFor="otakuChecker" >Otaku</label>
      <input 
      type="checkbox" 
      onChange={this.props.sendInfoHandler} 
      name="otakuChecker" 
      id="otakuChecker"/>
      </div>
    )
  }
}
