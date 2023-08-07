import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import ProductItem from "@/components/ProductItem";

import "swiper/css";

import "swiper/css/bundle";
import "swiper/css/effect-fade";

export default function SwiperComponent({ cards }) {
  return (
    <div className="wrapper__swiper__homepage">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation, EffectFade]}
        navigation
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <ProductItem
              id={card.id}
              img={card.img}
              title={card.name}
              originalPrice={card.price}
              currPrice={card.price}
              discount={card.discount} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};