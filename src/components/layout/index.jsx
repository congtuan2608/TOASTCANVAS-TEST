import { Outlet } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";

export const Layout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
