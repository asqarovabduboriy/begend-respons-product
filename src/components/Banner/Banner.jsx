import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import img1 from "../../assets/imgs/banner.jpg";
import img2 from "../../assets/imgs/Banner2.jpg";
import img3 from "../../assets/imgs/banner.3.jpg";

const Banner = () => {
  return (
    <>
      <div className="container mySwiper_flex">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper1 swiper_one"
        >
          <SwiperSlide className="banner_img_one">
            <img src={img1} alt="" width={"100%"} />
          </SwiperSlide>
          <SwiperSlide className="banner_img_one">
            <img src={img2} alt="" width={"100%"} />
          </SwiperSlide>
          <SwiperSlide className="banner_img_one">
            <img src={img3} alt="" width={"100%"} />
          </SwiperSlide>
        </Swiper>

      </div>
    </>
  );
};

export default Banner;
