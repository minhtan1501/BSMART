import { Typography } from "antd";
import "./style.css";
import { Link } from "react-router-dom";
export default function MentorCard({data}) {
  return (
    <Typography.Paragraph className="card mentor-card">
      <img className="mentor-card__avatar" src={data.image} alt="" />
      <Typography.Paragraph className="mentor-card__info">
        <Link to={"/"} className="mentor-card__info__name text-center">
          {data.name}
        </Link>

        <Typography.Title level={4} className="mentor-card__info__description">
         {data.description}
        </Typography.Title>
      </Typography.Paragraph>
    </Typography.Paragraph>
  );
}
