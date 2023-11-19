import { Badge, Drawer, Flex, Collapse } from "antd";
import "../css/HeaderMobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
const text = (
  <p
    style={{
      paddingLeft: 24,
    }}
  >
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);
const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: text,
  },
];
export default function HeaderMobile() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="header-mobile">
      <div className="container">
        <div className="header-mobile__content">
          <div className="header-mobile__logo">
            <img className="icon-logo-mobile" src="/icon-logo.webp" alt="" />
          </div>
          <GiHamburgerMenu onClick={showDrawer} size={24} />
        </div>
      </div>
      <Drawer placement="right" onClose={onClose} open={open}>
        <div className="sidebar-top">
          <Link to={"/"}>
            <img
              className="icon-logo-mobile icon-home-sidebar "
              src="./icon-logo-mobile-sidebar.webp"
              alt=""
            />
          </Link>
          <IoCloseSharp
            size={20}
            onClick={onClose}
            style={{ strokeWidth: 50 }}
          />
        </div>
        <Link>
          <Badge color="var(--orange)" count={5} offset={[-2, 20]}>
            <img className="icon-shopping-cart" src="/icon-cart.webp" alt="" />
          </Badge>
        </Link>
        <div className="sidebar-center">
          <Flex vertical gap={"small"}>
            <Link className="sidebar-center__text" to={"/"}>
              Trang Chủ
            </Link>
            <Link className="sidebar-center__text" to={"/"}>
              Về Chúng Tôi
            </Link>
            <Link className="sidebar-center__text" to={"/"}>
              Khóa Học STEM
            </Link>
            <div className="sidebar-center__text" to={"/course"}>
              Khoá Học
              <div className="" onClick={(e) => e.stopPropagation()}>
                <Collapse
                  items={items}
                  bordered={false}
                  defaultActiveKey={["1"]}
                />
              </div>
            </div>
            <Link className="sidebar-center__text" to={"/"}>
              Mentor
            </Link>
            <Link className="sidebar-center__text" to={"/"}>
              Blog
            </Link>
          </Flex>
        </div>
      </Drawer>
    </div>
  );
}
