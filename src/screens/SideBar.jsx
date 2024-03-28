import React, { useEffect, useState } from "react";
import "../index.css";
import {
  HomeOutlined,
  TeamOutlined,
  ShopOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
  MenuOutlined,
  CloseOutlined
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Dashboard",
    icon: HomeOutlined,
    path: "/"
  },
  {
    name: "Products",
    icon: AppstoreOutlined,
    path: "/products"
  },
  {
    name: "Users",
    icon: TeamOutlined,
    path: "/users"
  },
  {
    name: "Orders",
    icon: ShoppingOutlined,
    path: "/orders"
  },
  {
    name: "Shopping",
    icon: ShopOutlined,
    path: "/shopping"
  },
];

export const SideBar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 1400);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex w-64 h-screen border bg-white border-r-1  px-10 py-10 flex-col relative sidebar-transition ${
        collapsed ? "w-[66px] px-4 py-4" : "w-64"
      }`}
    >
      <div
        className="w-5 h-5 bg-[#d23565d1] rounded-full absolute p-3 -right-[10.2px] top-10 flex items-center justify-center text-white"
        onClick={toggleCollapsed}
      >
        {collapsed ? <MenuOutlined /> : <CloseOutlined />}
      </div>
      <div className=" flex items-center justify-center">
        {collapsed ? (
          <img src="src\assets\logo.jpg" alt="logo" />
        ) : (
          <img src="src\assets\logo-afrika.png" alt="logo" />
        )}
      </div>
      <div className="mt-10 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <NavLink 
            to={item.path} 
            key={index} 
            className={({ isActive }) => `flex flex-row items-center space-x-3 font-normal p-2 cursor-pointer text-xl ${isActive ? "bg-[#34313221] text-black  border-l-4 border-[#d23565d1] font-semibold" : ""}`}
            onClick={() => {}} 
          >
            {React.createElement(item.icon)}
            {!collapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
