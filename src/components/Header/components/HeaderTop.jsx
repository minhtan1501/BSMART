import "../css/HeaderTop.css";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { Button, Flex, Input } from "antd";
import { IoMdSearch } from "react-icons/io";
export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-top-wrapper">
          <div className="header-top-social">
            <Flex gap="middle"horizon="true" align="center">
              <FaFacebookF size={14} />
              <FaLinkedinIn size={14} />
              <ImYoutube2 size={20} />
            </Flex>
          </div>
          <Flex className="header-contract-info" gap={"large"}>
            <Flex align="center" gap={"small"}>
              <MdEmail color="#F26323" size={24} />
              <span>admin@bsmart.edu.vn</span>
            </Flex>
            <Flex align="center" gap="small">
              <FaPhoneAlt color="#F26323" size={24} />
              <span>028 9999 79 39</span>
            </Flex>
          </Flex>
          <div className="header-search-course">
            <form action="" style={{width: "75%"}}>
              <Input
                className="search-course"
                placeholder="Tìm kiếm khoá học"
                suffix={<IoMdSearch />}
              />
            </form>
          </div>
          <div className="header-log-reg">
            <Flex justify="center" align="center">
              <Button className="btn-reg-log" type="primary">
                Đăng nhập
              </Button>
              <span>|</span>
              <Button className="btn-reg-log" type="primary">
                Đăng ký
              </Button>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
}
