import React, { Component } from "react";

export default class Name extends Component {
  render() {
    // desconstrução do campo nome
    const { value, changeHandler, name, maxCharacterHandler } = this.props;

    // return do Name
    return (
      <div className="inputName inputs">
        <label htmlFor="inputName">
          Nome:
          <input
            type="text"
            value={value}
            name={name}
            id="inputName"
            onChange={changeHandler}
          />
          {/* Checagem de erro  */}
          <span> {maxCharacterHandler(40, value)} </span>
        </label>
      </div>
    );
  }
}
