import React, { Component } from 'react'

export default class Curriculum extends Component {
  render() {
    // desconstrução do campo nome
    const { value, changeHandler, name, maxCharacterHandler } = this.props;

    // return do Name
    return (
      <div className="inputCur inputs">
        <label htmlFor="inputCur">
          Resumo do currículo
          <textarea
            type="text"
            rows={8}
            cols={100}
            placeholder="Insira um Resumo do seu Currículo"
            value={value}
            name={name}
            id="inputCur"
            onChange={changeHandler}
            
          />
          {/* Checagem de erro  */}
          <span> {maxCharacterHandler(1000, value)} </span>
        </label>
      </div>
    );
  }
}
