import { Typography } from "antd";
import "../css/Course.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MentorCard from "../../../components/MentorCard";
import SlideShow from "../../../components/SlideShow";
import { MentorList } from "../../../utils/fakeData";

export default function Mentor() {
  return (
    <section className="course-section">
      <Typography.Paragraph className="container">
        <Typography.Paragraph className="course-content">
          <Typography.Title level={2} className="text-center">
            Mentor tiêu biểu
          </Typography.Title>
          <SlideShow data={MentorList} RenderSlide={MentorCard} />
        </Typography.Paragraph>
      </Typography.Paragraph>
    </section>
  );
}
