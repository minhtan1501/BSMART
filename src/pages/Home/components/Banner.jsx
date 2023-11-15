import { Link } from "react-router-dom";
import "../css/Banner.css"
import BtnLink from "../../../components/BtnLink";
export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="caption-content text-center">
        <h4>Khởi đầu sự nghiệp của bạn</h4>
        <h2>Trở thành lập trình viên chuyên nghiệp tại BSMART</h2>
        <p>
          Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa
          học chất lượng. BSMART sẽ giúp các bạn có định hướng về nghề nghiệp và
          phát triển bản thân trên con đường trở thành lập trình viên chuyên
          nghiệp
        </p>
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
