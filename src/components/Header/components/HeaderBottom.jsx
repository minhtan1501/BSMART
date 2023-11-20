import { Badge, Flex, Menu } from "antd";
import { Link } from "react-router-dom";
import "../css/HeaderBottom.css";

const CourseSubMenu = [
  {
    label: <Link to={"/123"}>Khoá học</Link>,
    key: "course",
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link to={"/123"}>Back-end</Link>,
            key: "setting:1",
          },
          {
            label: <Link to={"/123"}>Front-end</Link>,
            key: "setting:2",
          },
          {
            label: <Link to={"/123"}>Database</Link>,
            key: "setting:3",
          },
          {
            label: <Link to={"/123"}>STEM</Link>,
            key: "setting:4",
          },
          {
            label: <Link to={"/123"}>Cấp tốc</Link>,
            key: "setting:5",
          },
          {
            label: <Link to={"/123"}>Other</Link>,
            key: "setting:6",
          },
        ],
      },
    ],
  },
];

const AboutSubMenu = [
  {
    label: <Link to={"/123"}>Về chúng tôi</Link>,
    key: "SubMenu",
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link to={"/123"}>Câu chuyện về Founder</Link>,
            key: "setting:1",
          },
          {
            label: <Link to={"/123"}>Nền tảng LMS</Link>,
            key: "setting:2",
          },
        ],
      },
    ],
  },
];
export default function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="container">
        <Flex align="center" justify="space-between">
          <Link to={"/"}>
            <img className="icon-logo" src="/icon-logo.webp" alt="" />
          </Link>
          <nav className="container-fluid">
            <Flex gap={"small"} justify="center">
              <Link className="nav-link" to={"/"}>
                Trang Chủ
              </Link>
              <Menu
                className="nav-link"
                mode="horizontal"
                items={AboutSubMenu}
              />
              <Link className="nav-link" to={"/"}>
                Khóa Học STEM
              </Link>
              <Menu
                className="nav-link"
                mode="horizontal"
                items={CourseSubMenu}
              />
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
              <Badge color="var(--orange)" count={5} offset={[-2, 20]}>
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
