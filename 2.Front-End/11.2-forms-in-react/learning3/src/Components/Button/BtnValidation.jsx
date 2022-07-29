import React, { Component } from 'react'

export default class BtnValidation extends Component {

  render() {

    const { type, insideText } = this.props

    return (
      <button type={type} className="BtnInput">
        {insideText}
      </button>
    )
  }
}
