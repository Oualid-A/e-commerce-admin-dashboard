import React from "react";
import { Badge, Breadcrumb } from "antd";
import { HomeFilled } from "@ant-design/icons";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";

const HeaderComponent = () => {
  const notificationCount = 1;

  return (
    <>
      <div className="p-4 flex flex-row justify-between items-center w-full ">
        <div className="">
          <h1 className="font-bold text-2xl">Dashboard</h1>
        </div>
        <div className="flex flex-row items-center justify-around gap-8">
          <div className="flex flex-row items-center justify-between">
            <div className="wing-icon">
              <img src="src\assets\wing.png" alt="wings" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-x-0">
        <Breadcrumb className="px-4 pt-2 pb-2">
          <Breadcrumb.Item>
            <HomeFilled
              style={{ color: "rgba(210, 53, 101, 1)", fontSize: 17 }}
            />
          </Breadcrumb.Item>
          <Breadcrumb.Item>page 1</Breadcrumb.Item>
          <Breadcrumb.Item>page 2</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};
export default HeaderComponent;
