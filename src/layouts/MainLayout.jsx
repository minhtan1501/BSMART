
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Layout } from "antd";

export default function MainLayout() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}
