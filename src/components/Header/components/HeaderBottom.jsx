import "../css/HeaderBottom.css";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import { Badge } from "antd";
export default function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="container">
        <Flex align="center" justify="space-between">
          <Link to={"/"}>
            <img className="icon-logo" src="/icon-logo.webp" alt="" />
          </Link>
          <nav>
            <Flex gap={"small"}>
              <Link className="nav-link" to={"/"}>
                Trang Chủ
              </Link>
              <Link className="nav-link" to={"/"}>
                Về Chúng Tôi
              </Link>
              <Link className="nav-link" to={"/"}>
                Khóa Học STEM
              </Link>
              <Link className="nav-link" to={"/course"}>
                Khoá Học
              </Link>
              <Link className="nav-link" to={"/"}>
                Mentor
              </Link>
              <Link className="nav-link" to={"/"}>
                Blog
              </Link>
            </Flex>
          </nav>

          <div>
            <Link>
              <Badge  color="var(--orange)" count={5} offset={[-2,20]}>
                <img
                  className="icon-shopping-cart"
                  src="/icon-cart.webp"
                  alt=""
                />
              </Badge>
            </Link>
          </div>
        </Flex>
      </div>
    </div>
  );
}
