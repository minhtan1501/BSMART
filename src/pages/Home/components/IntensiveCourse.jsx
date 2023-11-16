import { Typography } from "antd";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import CourseCard from "../../../components/CourseCard";
import "../css/Course.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function IntensiveCourse() {
  return (
    <Typography.Paragraph className="course-section">
      <Typography.Paragraph className="container">
        <Typography.Paragraph className="course-content">
          <Typography.Title level={2} className="text-center">
            Khoá học cấp tốc
          </Typography.Title>
          <Swiper
            scrollbar={{ draggable: true }}
            modules={[Scrollbar, Navigation, Pagination]}
            slidesPerView={3}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            className=""
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <CourseCard />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard />
            </SwiperSlide>
          </Swiper>
        </Typography.Paragraph>
      </Typography.Paragraph>
    </Typography.Paragraph>
  );
}
