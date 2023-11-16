import { Typography } from "antd";
import "./style.css";
import { Link } from "react-router-dom";
export default function MentorCard() {
  return (
    <Typography.Paragraph className="card mentor-card">
      <img className="mentor-card__avatar" src="/mentor-1.webp" alt="" />
      <Typography.Paragraph className="mentor-card__info">
        <Link to={"/"} className="mentor-card__info__name text-center">
          Phạm Nhật Tân
        </Link>

        <Typography.Title level={4} className="mentor-card__info__description">
          Nhật Tân, với kinh nghiệm giảng dạy và chia sẻ cho nhiều học viên, tôi
          đã xây dựng được niềm tin rất lớn đối với cộng đồng. Hy vọng tôi sẽ
          đem đến cho các bạn những trải nghiệm đáng quý trong quá trình học tập
          cùng tôi.
        </Typography.Title>
      </Typography.Paragraph>
    </Typography.Paragraph>
  );
}
