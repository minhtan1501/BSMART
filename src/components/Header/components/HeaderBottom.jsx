import "../css/HeaderBottom.css";
import { Flex } from "antd";
import { Link } from "react-router-dom";
export default function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="container">
        <Flex align="center" justify="space-between">
          <Link to={"/"}>
            <img className="icon-logo" src="/icon-logo.webp" alt="" />
          </Link>
          <nav>
            <Flex gap={"small"} >
            <Link to={"/"}>Trang Chủ</Link>
            <Link to={"/"}>Về Chúng Tôi</Link>
            <Link to={"/"}>Khóa Học STEM</Link>
            <Link to={"/course"}>Khoá Học</Link>
            <Link to={"/"}>Mentor</Link>
            <Link to={"/"}>Blog</Link>

            </Flex>
          </nav>

          <div>
            <Link >
            <img className="icon-shopping-cart" src="/icon-cart.webp" alt="" />
            </Link>
          </div>
        </Flex>
      </div>
    </div>
  );
}
