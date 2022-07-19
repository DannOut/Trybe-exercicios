import { Component } from "react";

class Album extends Component {
  render() {
    return (
      <section>
        <img src={this.props.album.image} alt={this.props.album.title} />
        <h2>{this.props.album.title}</h2>
        <p>{this.props.album.releaseDate.year}</p>
        <p>
          Lançamento:
          { `${ this.props.album.releaseDate.day }/${ this.props.album.releaseDate.month }/${ this.props.album.releaseDate.year }` }
        </p>
        <p>Gravadora: { this.props.album.others.recordCompany }</p>
        <p>Formatos: { this.props.album.others.formats }</p>
      </section>

    )
  }
}

export default Album;























    // const album01 = {
    //   image: 'https://www.vagalume.com.br/coldplay/discografia/mylo-xyloto.jpg',
    //   title: 'Mylo Xyloto',
    //   releaseDate: {
    //     year: '2011',
    //     month: '10',
    //     day: '24',
    //   },
    //   others: {
    //     recordCompany: 'Capitol, Parlophone',
    //     formats: 'CD, digital'
    //   }
    // };