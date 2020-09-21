import React from "react";
import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Film from '../Film/Film'
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, A11y]);
const Carousel = (props) => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop={true}
       
      >
        {props.peliculas.map((item) => {
            console.log(item);
          return (
            <SwiperSlide >
             
               <Film nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} fecha={item.fecha} />
             
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
