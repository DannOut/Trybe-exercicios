import React, { Component } from 'react';

export default class AnimeChoice extends Component {
  render() {

    const  { animeChoice, sendInfoHandler } = this.props
    
    return (
      <select
        name="animeChoice"
        className="animeChoice"
        value={animeChoice}
        onChange={sendInfoHandler}
      >
        <option value=""> Choose </option>
        <option value="naruto">Naruto</option>
        <option value="bleach">Bleach</option>
        <option value="hunterxhunter">Hunter X Hunter</option>
        <option value="gantz">Gantz</option>
        <option value="onePiece">One Piece</option>
        <option value="dbz">Dragon Ball Z</option>
      </select>
    );
  }
}
