import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import IconButton from "@mui/material/IconButton";
import { Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const options = ["This week", "Last month", "Last year"];

const ITEM_HEIGHT = 48;

const PieChart = () => {
  const data = {
    labels: ["Acquisition", "Purchase", "Retention"],
    datasets: [
      {
        label: "Marketing Data",
        data: [12, 19, 3],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };
  const chartOptions = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
    },
    cutout: "50%",
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium tracking-tight leading-6 truncate ">
          Marketting
        </div>
        <div className="ml-2 -mt-2 -mr-3">
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={openMenu ? "long-menu" : undefined}
            aria-expanded={openMenu ? "true" : undefined}
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
            open={openMenu}
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
      <div className="flex items-center justify-center h-80">
        <Pie data={data} options={chartOptions} />
      </div>
    </>
  );
};

export default PieChart;
