import React, { Component } from 'react'

export default class JobDescription extends Component {
  render() {
    // desconstrução do campo nome
    const { value, changeHandler, name, maxCharacterHandler } = this.props;

    // return do Name
    return (
      <div className="inputjobDesc inputs">
        <label htmlFor="inputjobDesc">
          Descrição do Cargo
          <textarea
            type="text"
            rows={4}
            cols={100}
            placeholder="Insira a Descrição do Cargo"
            value={value}
            name={name}
            id="inputjobDesc"
            onChange={changeHandler}
          />
          {/* Checagem de erro  */}
          <span> {maxCharacterHandler(40, value)} </span>
        </label>
      </div>
    );
  }
}
