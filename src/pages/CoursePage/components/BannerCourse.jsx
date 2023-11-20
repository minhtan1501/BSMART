import { Link } from "react-router-dom";
import "../css/BannerCourse.css";
export default function BannerCourse() {
  return (
    <section className="banner-course-2">
      <div className="banner-course-2__content">
        <h1>Danh sách khoá học</h1>
        <p>
          <Link to="/">Trang chủ</Link>
          <span> &gt; </span> Khoá học
        </p>
      </div>
    </section>
  );
}
