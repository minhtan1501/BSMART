import { Badge, Button, Collapse, Drawer, Flex, Input } from "antd";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaPhone, FaPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineRemove } from "react-icons/md";
import { Link } from "react-router-dom";
import { Categories } from "../../../utils/fakeData";
import "../css/HeaderMobile.css";
import { IoMdSearch } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { ImYoutube2 } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";

const CourseList = (
  <Flex vertical className="sub-menu sidebar-collapse ">
    {Categories.map((c, i) => {
      return (
        <Link to={"/"} key={c.id}>
          {c.name}
        </Link>
      );
    })}
  </Flex>
);

const AboutList = (
  <Flex vertical className="sub-menu sidebar-collapse ">
    <Link to={"/"}>CÂU CHUYỆN FOUNDER</Link>
    <Link to={"/"}>NỀN TẢNG LMS</Link>
  </Flex>
);
const Course = [
  {
    key: "1",
    label: (
      <Link onClick={(e) => e.stopPropagation()} to="">
        Khoá học
      </Link>
    ),
    children: CourseList,
  },
];

const About = [
  {
    key: "1",
    label: (
      <Link onClick={(e) => e.stopPropagation()} to="">
        About
      </Link>
    ),
    children: AboutList,
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
          <GiHamburgerMenu className="sidebar-icon--open" onClick={showDrawer} size={24} />
        </div>
      </div>
      <Drawer  placement="right" onClose={onClose} open={open}>
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
            style={{ strokeWidth: 50, cursor:"pointer" }}
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
            <div
              className="sidebar-center__text sidebar-collapse"
              to={"/course"}
            >
              <Collapse
                items={About}
                bordered={false}
                expandIconPosition="end"
                expandIcon={(panelProps) => {
                  if (panelProps.isActive) {
                    return <MdOutlineRemove />;
                  }
                  return <FaPlus />;
                }}
              />
            </div>
            <Link className="sidebar-center__text" to={"/"}>
              Khóa Học STEM
            </Link>
            <div
              className="sidebar-center__text sidebar-collapse"
              to={"/course"}
            >
              <Collapse
                items={Course}
                bordered={false}
                expandIconPosition="end"
                expandIcon={(panelProps) => {
                  if (panelProps.isActive) {
                    return <MdOutlineRemove />;
                  }
                  return <FaPlus />;
                }}
              />
            </div>
            <Link className="sidebar-center__text" to={"/"}>
              Mentor
            </Link>
            <Link className="sidebar-center__text" to={"/"}>
              Blog
            </Link>
          </Flex>
        </div>
        <div className="sidebar-bottom">
          <form className="sidebar-bottom__search" >
              <Input
                className=""
                placeholder="Tìm kiếm khoá học"
                suffix={<IoMdSearch size={20}  style={{strokeWidth: 25}}/>}
              />
            </form>

              <div className="sidebar-bottom__contract-info">
              <Flex gap={6} style={{ paddingBottom: 0,marginBottom: "16px" }} align="center">
                <BiLogoGmail size={26} />
                <p className="m-0">admin@bsmart.edu.vn</p>
              </Flex>
              <Flex gap={6} style={{ paddingBottom: 0 }}>
                <FaPhoneAlt size={26} />
                <p className="m-0">028 9999 79 39</p>
              </Flex>
                </div>    

                <Flex className="social-list" gap="middle" horizon="true" align="center" style={{marginTop: "10px"}}>
                <FaFacebookF size={14} />
                <FaLinkedinIn size={14} />
                <ImYoutube2 size={20} />
              </Flex>
              <Flex className="sidebar-bottom__reg-login"  align="center">
              <Button className="" type="primary">
                Đăng nhập
              </Button>
              <span>|</span>
              <Button className="" type="primary">
                Đăng ký
              </Button>
            </Flex>
        </div>
      </Drawer>
    </div>
  );
}
