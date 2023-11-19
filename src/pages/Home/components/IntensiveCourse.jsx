import { Typography } from "antd";
import CourseCard from "../../../components/CourseCard";
import "../css/Course.css";

import { useMemo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideShow from "../../../components/SlideShow";
import { CourseList } from "../../../utils/fakeData";

export default function IntensiveCourse() {
  const data = useMemo(() => {
    let count = 0;
    return CourseList.filter((d, i) => {
      if (d.categories.id === 4 && count < 5) {
        count++;
        return d;
      }
    });
  });
  return (
    <section className="course-section">
      <Typography.Paragraph className="container">
        <Typography.Paragraph className="course-content">
          <Typography.Title level={2} className="text-center">
            Khoá học cấp tốc
          </Typography.Title>
          <SlideShow data={data} RenderSlide={CourseCard} />
        </Typography.Paragraph>
      </Typography.Paragraph>
    </section>
  );
}
