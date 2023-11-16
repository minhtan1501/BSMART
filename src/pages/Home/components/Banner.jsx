import "../css/Banner.css"
import BtnLink from "../../../components/BtnLink";
import { Typography } from "antd";
export default function Banner() {
  return (
    <section className="banner">
      <div className="container position-relative">
        <div className="caption-content text-center">
        <Typography.Title level={4}>Khởi đầu sự nghiệp của bạn</Typography.Title>
        <Typography.Title level={2}>Trở thành lập trình viên chuyên nghiệp tại BSMART</Typography.Title>
        <Typography.Text className="caption-content__description">
          Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa
          học chất lượng. BSMART sẽ giúp các bạn có định hướng về nghề nghiệp và
          phát triển bản thân trên con đường trở thành lập trình viên chuyên
          nghiệp
        </Typography.Text>
        </div>
        <div className="banner-control">
          <BtnLink path="/course">
            XEM KHOÁ HỌC
          </BtnLink>
        </div>
      </div>
    </section>
  );
}
