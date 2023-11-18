import { Typography } from "antd";
import "../css/Course.css";

import SlideShow from "../../../components/SlideShow";
import { useState } from "react";
import { CourseList } from "../../../utils/fakeData";
import CourseCard from "../../../components/CourseCard"
export default function Course() {
  const [data,setData] = useState(() => {
    return CourseList.filter((_,i) =>  {
      if(i < 5) {
        return _;
      }
      return;
    })
  })
  console.log(data);
  return (
    <Typography.Paragraph className="course-section">
      <Typography.Paragraph className="container">
        <Typography.Paragraph className="course-content">
          <Typography.Title level={2} className="text-center">
            Khoá học tiêu biểu
          </Typography.Title>
      <SlideShow data={data} RenderSlide={CourseCard}/>
        </Typography.Paragraph>
      </Typography.Paragraph>
    </Typography.Paragraph>
  );
}
