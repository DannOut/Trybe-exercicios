// ./components/ColorBox.js
import React from 'react';
import '../styles/box.css';
import ColorsContext from '../helpers/context/ColorsContext';

class ColorBox extends React.Component {

  render() {
    const { colors, colorIndex, nextColor } = this.context;
    console.log(this.context);
    console.log(colors);
    console.log(colorIndex);
    return(
      <button
        type="button"
        className="box"
        style={ { backgroundColor: colors[colorIndex] } }
        onClick={ () => nextColor() }
      >
        Click me to change my color!
      </button>
    )
  }
}

// ! responsável por fazer a cola === connect do redux
ColorBox.contextType = ColorsContext;

export default ColorBox;