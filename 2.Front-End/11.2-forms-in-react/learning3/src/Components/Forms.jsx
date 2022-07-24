import React, { Component } from 'react';
import Fieldset from './Fieldset';

export default class Forms extends Component {
  render() {
    const { children } = this.props;

    return (
      <form className="form" method="get">
        <Fieldset>
          
        </Fieldset>
      </form>
    );
  }
}
