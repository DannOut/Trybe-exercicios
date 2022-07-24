import { Component } from 'react';
class Pokemon extends Component {
  render() {
    const { name, id, type, image, moreInfo } = this.props;
    return (
      <div className='pokemon-div pokemon-flip'>
        <h1 className='pokemon-name'>{name}</h1>
        <h2 className='pokemon-id'>#{id}</h2>
        <h3 className='pokemon-type'>{type}</h3>
        <img className='pokemon-img' src={image} alt={name} />
        <a className='pokemon-link' href={moreInfo}>
          Wikia
        </a>
      </div>
    );
  }
}

export default Pokemon;
