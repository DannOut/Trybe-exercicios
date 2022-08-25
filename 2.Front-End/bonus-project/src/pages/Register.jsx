import React, { Component } from 'react';
import { connect } from 'react-redux';

class Register extends Component {
  render() {
    const { email, password } = this.props;
    const amIvalidated =
      (email.length === 0 && password.length === 0 ) ? (
        <h1>Login não efetuado </h1>
      ) : (
        <h1> Bem vindo, {email} </h1>
      );

    return <div>{amIvalidated}</div>;
  }
}

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
  password: state.loginReducer.password
});

export default connect(mapStateToProps)(Register);
