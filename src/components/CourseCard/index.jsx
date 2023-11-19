import { Avatar, Flex, Rate, Typography } from "antd";
import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./style.css";
import { FaRegCalendarDays } from "react-icons/fa6";

const LEVELSIMAGE = {
  1: "/ant-icon-01.webp",
  2: "/ant-icon-02.webp",
  3: "/ant-icon-03.webp",
  4: "/ant-icon-04.webp",
};

export default function CourseCard({ data }) {
  return (
    <div className="card course-card">
      <Link to={"/"}>
        <Typography.Paragraph
          className="banner-course"
          style={{
            paddingTop: "50%",
            backgroundImage: `url(${data?.banner})`,
            marginBottom: 0,
          }}
        >
          <Typography.Paragraph className="avatar-mentor">
            <Avatar
              shape="square"
              size={60}
              src={<img src={data?.mentor.image} alt="avatar" />}
            />
          </Typography.Paragraph>
        </Typography.Paragraph>
      </Link>

      <div
        className="card-body position-relative"
        style={{ flex: "1 1 auto", marginBottom: "unset !important" }}
      >
        {/* {Title Course} */}
        <div className="course-card__info position-relative ">
          <Link to={"/"}>
            <Typography.Title
              className="course-card__info__title"
              level={5}
              style={{
                marginTop: "5px !important",
                lineHeight: "27.5px !important",
                marginBottom: "0 !important",
              }}
            >
              {data?.title}
            </Typography.Title>
          </Link>
          <Avatar
            className="course-card__info__flag"
            shape="square"
            size={50}
            src={
              <img
                src={
                  data.categories.id === 4
                    ? "/hot.webp"
                    : LEVELSIMAGE[data.level]
                }
                alt="avatar"
              />
            }
          />
        </div>
        <div className="mt-auto">
          {/* {Mentor} */}
          <Link to={"/"}>
            <Flex
              gap={4}
              style={{ fontWeight: "600 !important" }}
              align="baseline"
            >
              <p className="sub-title" style={{ marginBottom: 0 }}>
                Mentor:{" "}
              </p>
              <p
                style={{
                  color: "var(--orange)",
                  fontSize: 16,
                  marginBottom: 0,
                  fontWeight: 500,
                }}
              >
                {data?.mentor?.name}
              </p>
            </Flex>
          </Link>
          {/* {Student} */}
          <Flex className="course-card__student" align="center" gap={2}>
            <BiSolidUser size={24} />
            <Typography.Text
              style={{ fontStyle: "italic", fontSize: 16 }}
              strong={true}
            >
              {data?.numStudent} Học viên
            </Typography.Text>
          </Flex>
          {/* {Description} */}
          <Typography.Paragraph className="course-card__description">
            <p>{data?.description}</p>
          </Typography.Paragraph>
          {/* {Rating} */}
          <Typography.Paragraph style={{ marginBlock: 0 }}>
            <Rate disabled defaultValue={4} className="course-card__rating" />
          </Typography.Paragraph>
          {/* {Price} */}
          <Flex align="baseline" gap={4}>
            <span className="course-card__price">
              {new Intl.NumberFormat("vi-VN", {
                maximumSignificantDigits: 3,
              }).format(data?.price)}{" "}
              VND
            </span>
            <FaRegCalendarDays size={16} />
            <Typography.Text strong style={{ fontStyle: "italic" }}>
              {data?.numOfSessions} Buổi học
            </Typography.Text>
          </Flex>
          {/* {Control} */}
          <Link to={"/"} className="course-card__btn">
            XEM CHI TIẾT
          </Link>
        </div>
      </div>
    </div>
  );
}
