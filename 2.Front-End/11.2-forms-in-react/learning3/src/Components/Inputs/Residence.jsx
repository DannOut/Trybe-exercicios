import React, { Component } from 'react';

export default class Residence extends Component {
  render() {
    const { name, changeHandler, checked } = this.props;

    return (
      <div className="inputResidence inputs">
        <div className="house">
          <label htmlFor="house">
            Casa
            <input
              type="radio"
              value="house"
              name={name}
              id="house"
              checked={checked === 'house'}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div className="apartment">
          <label htmlFor="apartment">
            Apartamento
            <input
              type="radio"
              value="apartment"
              name={name}
              id="apartment"
              checked={checked === 'apartment'}
              onChange={changeHandler}
            />
          </label>
        </div>
      </div>
    );
  }
}
