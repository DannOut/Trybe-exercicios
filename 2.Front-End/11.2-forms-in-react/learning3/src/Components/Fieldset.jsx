import React, { Component } from 'react';

export default class Fieldset extends Component {
  render() {
    const { children, className } = this.props;
    const classname = `FieldSet ${className}`
    return <fieldset className={classname} >{children}</fieldset>;
  }
}
