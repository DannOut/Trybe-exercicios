import React, { Component } from 'react';

export default class Fieldset extends Component {
  render() {
    const { children } = this.props;
    return <fieldset>{children}</fieldset>;
  }
}
