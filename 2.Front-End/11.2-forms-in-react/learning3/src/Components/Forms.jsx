import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Name from './Inputs/Name';
import Email from './Inputs/Email';
import IDfield from './Inputs/IDfield';
import Adress from './Inputs/Adress';
import City from './Inputs/City';
import State from './Inputs/State';

export default class Forms extends Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.state = {
      nameField: "",
      emailField: "",
      idField: "",
      adressField: "",
      cityField: "",
      stateField: "",
    };
  }

  changeHandler({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  // handler to check max length and acuse error if true
  // verificar melhor local para trabalhar a lógica
  maxCharacterHandler(maxLength, value) {
    let error = undefined;
    if (value.length > maxLength) error = `Máximo de ${maxLength} caractéres`;
    return error ? alert(error) : "";
  }

  render() {
    const { nameField, emailField, idField, adressField, cityField, stateField } = this.state;
    const { maxCharacterHandler, changeHandler } = this

    return (
      <form className="form" method="get">
        <Fieldset>
          <Name
            name="nameField"
            value={nameField}
            changeHandler={changeHandler}
            maxCharacterHandler={maxCharacterHandler}
          />
          <Email
            name="emailField"
            value={emailField}
            changeHandler={changeHandler}
            maxCharacterHandler={maxCharacterHandler}
          />
          <IDfield
            name="idField"
            value={idField}
            changeHandler={changeHandler}
            maxCharacterHandler={maxCharacterHandler}
          />
          <Adress
            name="adressField"
            value={adressField}
            changeHandler={changeHandler}
            maxCharacterHandler={maxCharacterHandler}
          />
          <City
          name="cityField"
          value={cityField}
          changeHandler={changeHandler}
          maxCharacterHandler={maxCharacterHandler}
          />
          <State 
          name="stateField"
          value={stateField}
          changeHandler={changeHandler}
          />
        </Fieldset>
      </form>
    );
  }
}
