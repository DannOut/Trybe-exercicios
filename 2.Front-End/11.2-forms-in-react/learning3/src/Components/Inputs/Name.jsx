import React, { Component } from 'react';

export default class Name extends Component {
  render() {
    // desconstrução do campo nome
    const { maxCharacterName, changeHandler, name, type } = this.props;

    let error = undefined;
    const nameField = () => {
      if (maxCharacterName.length > 10) error = 'text error!';
      return error ? alert(error) : '';
    };

    return (
      <div className="input">
        <label htmlFor="input">
          Nome:
          <input
            type={type}
            value={maxCharacterName}
            name={name}
            id="input"
            onChange={changeHandler}
          />
          <span> {nameField()} </span>
        </label>
      </div>
    );
  }
}
