import { Typography } from "antd";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "../css/Course.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import MentorCard from "../../../components/MentorCard";

export default function Mentor() {
  
  return (
    <Typography.Paragraph className="course-section">
      <Typography.Paragraph className="container">
        <Typography.Paragraph className="course-content">
          <Typography.Title level={2} className="text-center">
            Mentor tiêu biểu
          </Typography.Title>
          <Swiper
            scrollbar={{ draggable: true }}
            modules={[Scrollbar, Navigation, Pagination]}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            className=""
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 1000
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
            <SwiperSlide>
              <MentorCard />
            </SwiperSlide>
            <SwiperSlide>
              <MentorCard />
            </SwiperSlide>
            <SwiperSlide>
              <MentorCard />
            </SwiperSlide>
            <SwiperSlide>
              <MentorCard />
            </SwiperSlide>
          </Swiper>
        </Typography.Paragraph>
      </Typography.Paragraph>
    </Typography.Paragraph>
  );
}
