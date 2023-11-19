import { Typography } from "antd";
import React from "react";
import "../css/advantages2.css";
import BtnLink from "../../../components/BtnLink"
export default function Advantages2() {
  return (
    <section className="advantages-2">
      <Typography.Paragraph className="container">
        <Typography.Paragraph className="advantages-2-content position-relative">
        <Typography.Title level={4} className="text-center">
          Định hướng và Chuẩn hoá lộ trình học tập
        </Typography.Title>
        <Typography.Title level={2} className="text-center">
          Học Thật, Dự Án Thật, Mentor Tận Tâm
        </Typography.Title>
    <Typography.Paragraph className="d-flex justify-content-center">
    <BtnLink to={"/"} className="m-2" >Danh sách khoá học</BtnLink>
    <BtnLink to={"/"} className="m-2 ">Tư vấn lộ trình</BtnLink>

    </Typography.Paragraph>
        </Typography.Paragraph>
      </Typography.Paragraph>
    </section>
  );
}
