import React, { Component } from 'react'

export default class BaseForm extends Component {
  render() {
    const { children, handleSubmit } = this.props

    return (
      <form className="form" method="get" onSubmit={handleSubmit}> {children} </form>
    )
  }
}