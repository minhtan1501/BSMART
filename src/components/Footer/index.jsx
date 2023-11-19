import { Flex } from "antd";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { ImLocation2, ImYoutube2 } from "react-icons/im";
import { Link } from "react-router-dom";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="footer-logo">
              <Link to={"/"} className="site-logo site-logo-footer">
                <img
                  src="/icon-logo-footer.webp"
                  className="icon-logo"
                  style={{
                    marginLeft: "-50px",
                    width: "200px",
                    height: "75px",
                  }}
                  alt=""
                />
              </Link>
              <div className="footer-about-description">
                Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các
                kỹ năng lập trình của bạn. Tất cả các mentor của chúng tôi đều
                có nhiều kinh nghiệm trong thực tế và giảng dạy.
              </div>
              <h6>Theo dõi chúng tôi tại:</h6>
              <Flex gap="middle" horizon="true" align="center">
                <FaFacebookF size={14} />
                <FaLinkedinIn size={14} />
                <ImYoutube2 size={20} />
              </Flex>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-3">
            <div className="footer-menu">
              <h4>Menu</h4>
              <Flex vertical gap={"small"}>
                <Link to={"/"}>Trang Chủ</Link>
                <Link to={"/"}>Về Chúng Tôi</Link>
                <Link to={"/"}>Khóa Học STEM</Link>
                <Link to={"/course"}>Khoá Học</Link>
                <Link to={"/"}>Mentor</Link>
                <Link to={"/"}>Blog</Link>
              </Flex>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-3">
            <div className="footer-menu">
              <h4>Điều khoản</h4>
              <Flex vertical gap={"small"}>
                <Link to={"/"}>Chính sách bảo mật</Link>
                <Link to={"/"}>Điều khoản dịch vụ</Link>
              </Flex>
              <h4>Cộng tác viên</h4>
              <Flex vertical gap={"small"}>
                <Link to={"/"}>Đăng ký Cộng tác viên</Link>
                <Link to={"/"}>Đăng ký Mentor</Link>
              </Flex>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="footer-contact">
              <h4>Liên hệ với chúng tôi</h4>

              <Flex gap={4} style={{ paddingBottom: 0 }}>
                <ImLocation2 size={24} />

                <p className="m-0" style={{ marginLeft: "-10px !important" }}>
                  Tòa S9.02A, Vinhomes Grand Park, TP.Thủ Đức
                </p>
              </Flex>
              <Flex gap={4} style={{ paddingBottom: 0 }}>
                <BiLogoGmail size={24} />
                <p className="m-0">admin@bsmart.edu.vn</p>
              </Flex>
              <Flex gap={4} style={{ paddingBottom: 0 }}>
                <FaPhone size={24} />
                <p className="m-0">028 9999 79 39</p>
              </Flex>
            </div>
          </div>
        </div>
      </div>
      <hr
        className="text-success mt-5"
        style={{ marginTop: "0rem !important" }}
      ></hr>
      <div className="container">
        <p className="m-0 text-light text-center" style={{ fontSize: "13px" }}>
          © Bản quyền BSmart 2023 - Empowered by <Link to="/">BSmart</Link> -
          version 1.1.13
        </p>
      </div>
    </footer>
  );
}
