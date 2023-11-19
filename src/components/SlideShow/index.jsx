import { useRef } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

export default function SlideShow({ data = [], RenderSlide = null, classPagination= "abc" + Math.floor(Math.random(1) * 99999) }) {
  const swiperRef = useRef();
  return (
    <div className="swiper-container">
      <Swiper
      className="logo-slide"
        scrollbar={{ draggable: true }}
        modules={[Scrollbar, Navigation, Pagination]}
        pagination={{
          el: `.${classPagination}`,
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 1000,
          },
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
        {data.map((d) => {
          return (
            <SwiperSlide key={d.id}>
              <RenderSlide data={d} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div style={{marginTop: 30, textAlign:"center"}}  className={classPagination}></div>
      <div
        className="swiper-button-next"
        onClick={() => swiperRef.current.slideNext()}
      >
        <MdOutlineArrowForwardIos />
      </div>
      <div
        className="swiper-button-prev"
        onClick={() => swiperRef.current.slidePrev()}
      >
        <MdOutlineArrowBackIosNew />
      </div>
    </div>
  );
}
