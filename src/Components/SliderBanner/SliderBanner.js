import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderBanner.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { EffectFade, Autoplay, Pagination } from "swiper";

SwiperCore.use([Autoplay]);

const SliderBanner = (props) => {
  const { banner1, banner2, banner3 } = props.banner;
  return (
    <Swiper
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      effect={"fade"}
      modules={[EffectFade, Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src={banner1?.img}
          alt={banner1?.title}
          width="100%"
          height="100%"
        />
        <div className="banner-text">
          <h4>{banner1?.title}</h4>
          <h1>{banner1?.subTitle}</h1>
          <h3>{banner1?.desc}</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={banner2?.img}
          alt={banner2?.title}
          width="100%"
          height="100%"
        />
        <div className="banner-text-2">
          <h5>{banner2?.title}</h5>
          <h1>{banner2?.subTitle}</h1>
          <p>{banner2?.p}</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3?.img} alt="" width="100%" height="100%" />
        <div className="banner-text-3">
          <h4>{banner3?.title}</h4>
          <h1>{banner3?.subTitle}</h1>
          <h3>{banner3?.desc}</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderBanner;
