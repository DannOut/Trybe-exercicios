import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Name from './Inputs/Name';

export default class Forms extends Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.state = {
      nameField: '',
    };
  }

  changeHandler({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { nameField } = this.state;

    return (
      <form className="form" method="get">
        <Fieldset>
          <Name
            name="nameField"
            maxCharacterName={nameField}
            changeHandler={this.changeHandler}
            type="text"
          />
        </Fieldset>
      </form>
    );
  }
}
