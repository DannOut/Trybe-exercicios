import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions';

const PASSWORD_NAME = 'password';
const EMAIL_NAME = 'email'
const MIN_LENGTH_PASSWORD = 6;
const INITIAL_STATE = {
  email: '',
  password: '',
  btnState: true,
};

class Login extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => this.validateForm()
    );
  };

  validateEmailHandler = () => {
    const { email } = this.state;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+.[A-Z]{2,}$/gim;
    return regex.test(email);
  };

  costumerSubmitHandler = () => {
    const { history, dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(loginAction({ email, password }));
    history.push('/register');
  };

  validateForm = () => {
    const { password } = this.state;
    const validatedForm = password.length > MIN_LENGTH_PASSWORD;
    const validation = validatedForm && this.validateEmailHandler;
    this.setState({
      btnState: !validation,
    });
  };

  render() {
    // console.log(this.props);
    const { btnState } = this.state;
    return (
      <form>
        <label htmlFor={EMAIL_NAME}>
          Email:
          <input
            type={EMAIL_NAME}
            name={EMAIL_NAME}
            onChange={this.handleChange}
            id={EMAIL_NAME}
          />
        </label>
        <label htmlFor={PASSWORD_NAME}>
        Password:
          <input
            type={PASSWORD_NAME}
            name={PASSWORD_NAME}
            id={PASSWORD_NAME}
            onChange={this.handleChange}
          />
        </label>
        <button
          type="button"
          disabled={btnState}
          onClick={this.costumerSubmitHandler}
          placeholder="password min length 6"
        >
          Submit
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
