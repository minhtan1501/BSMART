import { Col, Row, Typography } from "antd";
import "../css/Learning.css";
export default function Learning() {
  return (
    <section className="learning-path">
      <Typography.Paragraph className="container-fluid">
        <Row>
          <Col sm={12} className="left-section text-center">
            <Typography.Paragraph className="position-relative left-section__content">
              <Typography.Title level={2}>Trái ngành</Typography.Title>
              <Typography.Text>From Zero to Hero</Typography.Text>
            </Typography.Paragraph>
          </Col>
          <Col sm={12} className="right-section text-center">
            <Typography.Paragraph className="position-relative right-section__content">
              <Typography.Title level={2}>Đã biết lập trình</Typography.Title>
              <Typography.Text>
                Đã có kiến thức tư duy lập trình và OOP
              </Typography.Text>
            </Typography.Paragraph>
          </Col>
        </Row>
      </Typography.Paragraph>
    </section>
  );
}
