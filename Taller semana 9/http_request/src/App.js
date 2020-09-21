import React, {Component} from 'react'
import Axios from 'axios'
import Style from './App.module.css'
import Card from "./components/item/card/card";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

class App extends Component {
  constructor() {
    super();
    this.state={games:[]}
  }
  componentDidMount() {
    Axios.get('https://api.npoint.io/632ecc2c60060614e1e7',{}).then((res) =>{
        const data = res.data
        this.setState({games:data.juego})
    }).catch((error)=>{
        console.log('Error')
    })
  }

  render() {
        return (
            <div className={Style.grid}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                {this.state.games.map(item => {
                    return(
                        <SwiperSlide>
                        <Card img={item.imagen} key={item.id} name={item.nombre}/>
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </div>
        );
    }
}

export default App;