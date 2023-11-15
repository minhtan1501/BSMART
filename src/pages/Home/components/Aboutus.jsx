import React from "react";
import "../css/Aboutus.css";
import { Col, Flex, Row } from "antd";
import BtnLink from "../../../components/BtnLink";

export default function Aboutus() {
  return (
    <section className="aboutus">
      <div className="container">
        <div className="aboutus-content text-center">
          <h2 className="aboutus-heading">Về chúng tôi</h2>
        </div>
        <Row align={"center"} justify={"center"} gutter={[18, 18]}>
          <Col md={12} xs={24}>
            <p className="about-description">
              BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy về
              đào tạo lập trình viên, kết nối Mentor và Mentee. Với đội ngũ
              Mentor giàu kinh nghiệm và chuyên môn, BSMART cam kết mang đến các
              khóa học lập trình chất lượng nhất. Hệ thống khóa học đa dạng và
              linh hoạt, từ cơ bản đến nâng cao, giúp học viên có thể lựa chọn
              các khóa học phù hợp với nhu cầu và khả năng của mình. BSMART cập
              nhật và áp dụng những công nghệ mới, giúp học viên và Mentor được
              tiếp cận với những kiến thức và kỹ năng mới nhất trong lập trình.
              Bên cạnh đó, BSMART luôn đặt sự quan tâm, hỗ trợ học viên trong
              quá trình học tập và phát triển sự nghiệp sau khi tốt nghiệp.
            </p>
            <Flex gap={"middle"} className="aboutus-control">
                <BtnLink path="/course">
                    XEM KHOÁ HỌC
                </BtnLink>

                <BtnLink path="/">
                    HỖ TRỢ TƯ VẤN
                </BtnLink>

            </Flex>
            <Flex></Flex>
          </Col>
          <Col md={12} xs={24}>
            <div className="banner-aboutus">
              <img src="/banner-2.webp" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
