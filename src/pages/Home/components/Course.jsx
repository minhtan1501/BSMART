import { Col, Row, Typography } from "antd";
import CourseCard from "../../../components/CourseCard";
import "../css/Course.css";
export default function Course() {
  return (
    <Typography.Paragraph>
      <Typography.Paragraph className="container">
        <Row>
          <Col sm={6}>
            <CourseCard />
          </Col>
        </Row>
      </Typography.Paragraph>
    </Typography.Paragraph>
  );
}
