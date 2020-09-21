import React, {Component} from 'react'
import Axios from 'axios'
import Style from './App.module.css'
import Card from "./components/item/card/card";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
                <h1 className={Style.title}>Trabajo semana 9 <br/>Ricardo Rosa</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
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