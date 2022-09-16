import { Component } from 'react'
import ColorsContext from './ColorsContext';

export default class Provider extends Component {
  state={
    colors: ['blue', 'red',  'yellow'],
    colorIndex: 0,
  }

  nextColor = () => {
    const { colorIndex, colors } = this.state;
    if (colorIndex < (colors.length - 1)) {
      this.setState((prevState) => ({
        colorIndex: prevState.colorIndex + 1
      }))
    } else {
      this.setState(() => ({ colorIndex: 0 }))
    }
  }

  render() {
    const context = {
      ...this.state,
      nextColor: this.nextColor,
    }
    const { children } = this.props;
    console.log(children);
    return (
      <ColorsContext.Provider value={ context }>
        { children }
      </ColorsContext.Provider>
    )
  }
}