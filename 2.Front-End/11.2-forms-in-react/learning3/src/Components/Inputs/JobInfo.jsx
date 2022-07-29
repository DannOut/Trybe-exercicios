import React, { Component } from 'react';

export default class JobInfo extends Component {
  render() {
    // desconstrução do campo nome
    const { value, changeHandler, name, maxCharacterHandler } = this.props;

    // return do Name
    return (
      <div className="inputInfo inputs">
        <label htmlFor="inputInfo">
          Cargo
          <textarea
            type="text"
            rows={2}
            cols={40}
            placeholder="Insira o Cargo"
            value={value}
            name={name}
            id="inputInfo"
            onChange={changeHandler}
          />
          {/* Checagem de erro  */}
          <span> {maxCharacterHandler(40, value)} </span>
        </label>
      </div>
    );
  }
}
