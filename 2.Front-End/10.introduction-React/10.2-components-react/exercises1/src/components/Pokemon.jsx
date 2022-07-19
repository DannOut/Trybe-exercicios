import { Component } from 'react';
class Pokemon extends Component {
  render() {
    const {name, id, type, image, moreInfo} = this.props
    return (
      <div className='pokemon-div' >
        <h1 className='pokemon-name'>{name}</h1>
        <h2 className='pokemon-id'>#{id}</h2>
        <h3 className='pokemon-type'>{type}</h3>
        <img className='pokemon-img' src={image} alt={name} />
        <a className='pokemon-link' href={moreInfo}>Clique aqui</a>
      </div>
    );
  }
}

export default Pokemon;
