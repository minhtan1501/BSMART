import { Col, Flex, Row, Typography } from "antd";
import { useState } from "react";
import { AdvantagesData } from "../../../utils/fakeData";
import "../css/Advantages.css";
export default function Advantages() {
  const [data, setData] = useState(AdvantagesData);
  return (
    <section className="advantages">
      <div className="container">
        <Typography.Title
          className="advantages__title text-center"
          level={2}
          style={{ fontSize: 45 }}
        >
          Điểm ưu việt tại BSmart
        </Typography.Title>

        <Row>
          {data.map((d, i) => {
            return (
              <Col key={i} md={8}>
                <div className="service-card">
                  <Flex
                    className="service-card__title"
                    align="center"
                    gap={"small"}
                    style={{ height: 70 }}
                  >
                    <d.Icon className="service-card__icon" size={34} />
                    <Typography.Title
                      style={{
                        fontSize: 22,
                        marginBottom: 0,
                        color: " #FF630F",
                      }}
                      level={4}
                    >
                      {d.title}
                    </Typography.Title>
                  </Flex>

                  <Typography.Text className="service-card__content">
                    {d.content}
                  </Typography.Text>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}
