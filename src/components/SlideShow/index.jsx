import { useRef } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper } from "swiper/react";
import "./style.css";

export default function SlideShow({ data = [], RenderSlide = null }) {
  const swiperRef = useRef();
  const paginationRef = useRef(null);
  return (
    <div className="swiper-container">
      <Swiper
        scrollbar={{ draggable: true }}
        modules={[Scrollbar, Navigation, Pagination]}
        pagination={{
          el: ".my-custom-pagination-div",
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
          return <RenderSlide data={d} key={d.id} />;
        })}
      </Swiper>
      <div ref={paginationRef} className="my-custom-pagination-div"></div>
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
