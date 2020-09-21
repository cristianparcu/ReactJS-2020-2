import React, {Component} from 'react';
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Carrusel.css';


export default class Carrusel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      galleryItems: [],
    };
}
 getData (){
    axios.get(`https://api.npoint.io/cd4a33c02430ed778451`, {})
        .then(res => {
                const data = res.data
              const img = data.map(m =>
                <img src={m.download_url} alt=""/>
              )
              this.setState({
                galleryItems: img
              })
            }).catch((error) => {
                console.log(error)
            })
  }
  responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  }
  componentDidMount() {
   this.getData()
}

  render() {
    return (
      <div>
      <div>
        <h1> CAMINO A LA DECIMA </h1>
      </div>
        <AliceCarousel
        items={this.state.galleryItems}
        responsive={this.responsive}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
      />
      </div>
    )
  }
}
