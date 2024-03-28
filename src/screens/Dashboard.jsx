import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Menu, MenuItem } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PieChartIcon from "@mui/icons-material/PieChart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import HeaderComponent from "../components/dashboard/Header";
import Chart from "../components/dashboard/Chart";
import Orders from "../components/dashboard/Orders";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const options = ["This week", "Last month", "Last year"];
const ITEM_HEIGHT = 48;

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="">
        <HeaderComponent />
        <div className="flex flex-col gap-4 bg-[#f4f5fa] p-4 flex-nowrap">
          <div className="flex lg:flex-row flex-col lg:w-full w-full gap-4">
            <div className="flex gap-4 md:flex-row flex-col lg:w-3/5 w-full">
              <div className="flex flex-col flex-auto p-6 bg-card shadow overflow-hidden w-auto h-36 bg-white rounded-xl card">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium tracking-tight leading-6 truncate icon">
                    <img src="src\assets\Graph.png" alt="graph-icon" />
                  </div>
                  <div className="ml-2 -mt-2 -mr-3">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          selected={option === "Pyxis"}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-6 w-full">
                  <div className="flex flex-col items-start space-y-2">
                    <div className="text-lg tracking-tight leading-none text-slate-400">
                      Sales
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="text-xl font-medium">₦0.00</div>
                      <div className="text-sm font-light text-lime-500 ml-2">
                        +0.00%
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-baseline space-y-2 justify-center text-secondary">
                    <div className="text-lg tracking-tight leading-none text-slate-400">
                      Volume
                    </div>
                    <div className="ml-1.5 text-xl font-semibold">0</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-auto p-6 bg-card shadow overflow-hidden w-auto h-36 bg-white rounded-xl card">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium tracking-tight leading-6 truncate icon-team">
                    <GroupOutlinedIcon />
                  </div>
                  <div className="ml-2 -mt-2 -mr-3">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          selected={option === "Pyxis"}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-6 w-full">
                  <div className="flex flex-col items-start space-y-2">
                    <div className="text-lg tracking-tight leading-none text-slate-400">
                      Costumers
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="text-xl font-medium">0</div>
                      <div className="text-sm font-light text-lime-500 ml-2">
                        +0.00%
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-baseline justify-center  space-y-2  text-secondary">
                    <div className="text-lg tracking-tight leading-none text-slate-400">
                      Active
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="text-xl font-medium">0</div>
                      <div className="text-sm font-light text-lime-500 ml-2">
                        +0.00%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 w-full">
              <div className="flex flex-col flex-auto p-6 bg-card shadow overflow-hidden bg-white rounded-xl h-auto lg:h-36 lg:w-full">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium tracking-tight leading-6 truncate icon-team">
                    <ShoppingBagOutlinedIcon />
                  </div>
                  <div className="ml-2 -mt-2 -mr-3">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          selected={option === "Pyxis"}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </div>
                <div className="mt-6 w-full space-y-2 md:space-y-0 md:flex md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col justify-between items-start">
                    <div className="text-lg tracking-tight leading-none text-slate-400">
                      All Orders
                    </div>
                    <div className="text-xl font-medium">0</div>
                  </div>
                  <div className="flex flex-col items-baseline justify-between space-y-2 text-secondary">
                    <div className="text-lg tracking-tight leading-none text-slate-400">
                      Pending
                    </div>
                    <div className="text-xl font-medium">0</div>
                  </div>
                  <div className="flex flex-col items-baseline justify-between space-y-2 text-secondary">
                    <div className="text-lg tracking-tight leading-none text-slate-400">
                      Completed
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="text-xl font-medium">0</div>
                      <div className="text-sm font-light text-lime-500 ml-2">
                        +0.00%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col lg:w-full w-full gap-4">
            <div className="flex-col lg:w-3/5 w-full gap-4 flex">
              <div className="flex md:flex-row flex-col  gap-4 ">
                <div className=" md:w-[52%] w-full h-auto p-6 bg-card shadow overflow-hidden  bg-white rounded-xl  pie-card">
                  <PieChartIcon />
                </div>
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                  <div className=" p-6 bg-card shadow overflow-hidden w-full h-48  rounded-xl xl:col-span-1 lg:col-span-1 sm:col-span-1 card-bg">
                    <div className="flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-medium tracking-tight leading-6 truncate icon-team">
                          <FolderOpenIcon style={{ color: "white" }} />
                        </div>
                        <div className="ml-2 -mt-2 -mr-3">
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? "long-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                          >
                            <KeyboardArrowDownIcon style={{ color: "white" }} />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            MenuListProps={{
                              "aria-labelledby": "long-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                              style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: "20ch",
                              },
                            }}
                          >
                            {options.map((option) => (
                              <MenuItem
                                key={option}
                                selected={option === "Pyxis"}
                                onClick={handleClose}
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </Menu>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-6 w-full space-y-4">
                        <div className="flex flex-col items-baseline justify-center mt-3 space-y-3 text-secondary ">
                          <div className="md:text-lg text-sm tracking-tight leading-none text-slate-200">
                            All Products
                          </div>
                          <div className="flex flex-row items-center  justify-between">
                            <div className="md:text-lg text-sm text-white  font-medium">
                              0
                            </div>
                            <div className="md:text-lg text-sm font-light text-white ml-2">
                              +0.00%
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-baseline justify-center  space-y-3  text-secondary">
                          <div className="md:text-lg text-sm tracking-tight leading-none text-slate-200">
                            Active
                          </div>
                          <div className="flex flex-row items-center justify-between">
                            <div className="md:text-lg text-sm text-white font-medium">
                              0
                            </div>
                            <div className="md:text-lg text-sm font-light text-white ml-2">
                              +0.00%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" p-6 bg-card shadow overflow-hidden w-full h-48 bg-white rounded-xl xl:col-span-1 lg:col-span-1 sm:col-span-1 card">
                    <div className="flex flex-col justify-between h-auto">
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-medium tracking-tight leading-6 truncate icon-team">
                          <ShoppingCartOutlinedIcon />
                        </div>
                        <div className="ml-2 -mt-2 -mr-3">
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? "long-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                          >
                            <KeyboardArrowDownIcon />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            MenuListProps={{
                              "aria-labelledby": "long-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                              style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: "20ch",
                              },
                            }}
                          >
                            {options.map((option) => (
                              <MenuItem
                                key={option}
                                selected={option === "Pyxis"}
                                onClick={handleClose}
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </Menu>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-10 w-full">
                        <div className="flex flex-col items-start space-y-3">
                          <div className="md:text-lg text-sm tracking-tight leading-none text-[#cc5f5f]">
                            Abandoned Cart
                          </div>
                          <div className="flex flex-row items-center justify-between">
                            <div className="md:text-lg text-sm font-medium">0</div>
                            <div className="md:text-lg text-sm font-light text-lime-500 ml-2">
                              +0.00%
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col  justify-center space-y-3  text-secondary">
                          <div className="md:text-lg text-sm tracking-tight leading-none text-slate-400">
                            Costomers
                          </div>
                          <div className="flex flex-row items-center justify-between">
                            <div className="md:text-lg text-sm font-medium">0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  gap-4">
                <div className=" w-auto h-auto bg-white p-6 shadow rounded-xl">
                  <Chart />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-2/5 h-auto bg-white p-6 shadow rounded-xl">
              <div className="text-xl font-semibold mb-4">Recent Orders</div>
              <div className="flex-grow flex items-center justify-center">
                <Orders />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
