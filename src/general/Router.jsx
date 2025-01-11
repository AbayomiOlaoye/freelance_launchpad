import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../home/Home.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";

export const Router = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ToastContainer theme="light" position="top-right" />
  </Layout>
);
