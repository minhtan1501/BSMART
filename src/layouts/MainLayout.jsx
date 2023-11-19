
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Layout } from "antd";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer/>
    </Layout>
  );
}
