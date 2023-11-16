import { Avatar, Flex, Rate, Typography } from "antd";
import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./style.css";
import { FaRegCalendarDays } from "react-icons/fa6";

export default function CourseCard() {
  return (
    <Typography.Paragraph className="card course-card">
      <Link to={"/"}>
        <Typography.Paragraph
          className="banner-course"
          style={{ paddingTop: "50%", backgroundImage: "url(/PRJ301.webp)" }}
        >
          <Typography.Paragraph className="avatar-mentor">
            <Avatar
              shape="square"
              size={68}
              src={<img src={"/mentor-1.webp"} alt="avatar" />}
            />
          </Typography.Paragraph>
        </Typography.Paragraph>
        <Typography.Paragraph
          className="card-body position-relative"
          style={{ flex: "1 1 auto" }}
        >
          <div className="course-card__title position-relative ">
            <Link to={"/"}>
              <Typography.Title
                className="card-title"
                level={5}
                style={{
                  marginTop: "5px !important",
                  lineHeight: "27.5px !important",
                  minHeight: "55px",
                  maxHeight: "55px",
                  marginBottom: 0,
                }}
              >
                Java Web Application_Cap toc
              </Typography.Title>
            </Link>
            <Avatar
              className="course-card__title__flag"
              shape="square"
              size={50}
              src={<img src={"/ant-icon-01.webp"} alt="avatar" />}
            />
          </div>

          <Link>
            <Flex
              gap={4}
              style={{ fontWeight: "600 !important" }}
              align="center"
            >
              <p className="sub-title" style={{ marginBottom: 0 }}>
                Mentor:{" "}
              </p>
              <p
                style={{
                  color: "var(--orange)",
                  fontSize: 16,
                  marginBottom: 0,
                }}
              >
                Trần Hoà Hiệp
              </p>
            </Flex>
          </Link>
          <Flex className="course-card__student" align="center" gap={2}>
            <BiSolidUser size={24} />
            <Typography.Text
              style={{ fontStyle: "italic", fontSize: 16 }}
              strong={true}
            >
              14 Học viên
            </Typography.Text>
          </Flex>
          <Typography.Paragraph className="description">
            <p>
              .NET Core API là một framework được tạo ra bởi Microsoft để xây
              dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ
              trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát
              triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và
              Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt
              động trên các nền tảng khác nhau một cách dễ dàng và không cần
              phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
            </p>
          </Typography.Paragraph>
          <Typography.Paragraph style={{ margin: 0 }}>
            <Rate disabled defaultValue={4} className="course-card__rating" />
          </Typography.Paragraph>
          <Flex align="center" gap={6}>
            <span>
              {new Intl.NumberFormat('vi-VN', { maximumSignificantDigits: 3 }).format(200000)} VND
            </span>
            <FaRegCalendarDays size={20}/>
          </Flex>
        </Typography.Paragraph>
      </Link>
    </Typography.Paragraph>
  );
}
