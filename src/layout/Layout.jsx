import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SideBar } from "../screens/SideBar";
const Layout = () => {
    const location = useLocation();
    useEffect(() => window.scrollTo(0, 0), [location]);
    return (
      <div className="flex w-full h-screen">
        <SideBar />
        <div className="flex-grow overflow-auto">
          <Outlet />
        </div>
      </div>
    );
  };
  export default Layout;
  