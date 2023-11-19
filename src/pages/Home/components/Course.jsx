import { Typography } from "antd";
import "../css/Course.css";

import { useMemo } from "react";
import CourseCard from "../../../components/CourseCard";
import SlideShow from "../../../components/SlideShow";
import { CourseList } from "../../../utils/fakeData";
export default function Course() {
  const data = useMemo(() => {
    return CourseList.filter((d, i) => {
      if (i < 5) return d;
      return;
    }, []);
  });
  return (
    <section className="course-section">
      <Typography.Paragraph className="container">
        <Typography.Paragraph className="course-content">
          <Typography.Title level={2} className="text-center">
            Khoá học tiêu biểu
          </Typography.Title>
          <SlideShow data={data} RenderSlide={CourseCard} />
        </Typography.Paragraph>
      </Typography.Paragraph>
    </section>
  );
}
