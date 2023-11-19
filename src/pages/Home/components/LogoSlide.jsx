import { Typography } from "antd";
import React from "react";
import "../css/LogoSlide.css";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function LogoSlide() {
  return (
    <section className="logo-slide-1">
      <section className="information">
        <div className="container">
          <div className="row">
            <div className="introduction">
              <h5>Nhận được sự tin tưởng của các đối tác</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="logo-section">
        <Swiper
        modules={[Pagination]}
        pagination={{
          el: ".custom-pagination"
        }}
        scrollbar={{ draggable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <img width={100} height={100} src="/logo-dai-hoc-01.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img width={100} height={100} src="/logo-dai-hoc-05.webp" alt="" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img width={100} height={100} src="/logo-dai-hoc-06.webp" alt="" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img width={100} height={100} src="/logo-dai-hoc-07.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img width={100} height={100} src="/logo-dai-hoc-01.webp" alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
      <div style={{marginTop: 30, textAlign:"center"}}  className={"custom-pagination"}></div>
    </section>
  );
}
