import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3> Tela de Login </h3>
        <Link to="/login"> Login </Link>
      </div>
    )
  }
}
