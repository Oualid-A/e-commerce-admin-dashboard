import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const timeFrames = ["Last 8 days", "Last month", "Last year"];

const Chart = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Sales");
  const dropdownItems = ["Sales", "Revenue", "Profit"];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [timeFrame, setTimeFrame] = useState(timeFrames[0]);

  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        borderRadius: 7,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "Sept 10",
        "Sept 11",
        "Sept 12",
        "Sept 13",
        "Sept 14",
        "Sept 15",
        "Sept 16",
        "Sept 17",
        "Sept 18",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return val + "k";
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      colors: ["#eef0fa"],
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " K";
        },
      },
    },
  });

  const [series] = useState([
    {
      name: "Sales",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
  ]);

  const handleTimeFrameClick = (event) => {
    setTimeFrame(event.currentTarget.textContent);
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
     
        <div className="flex items-center justify-between space-x-6">
          <div className="md:text-lg text-sm font-medium tracking-tight leading-6 truncate">
            Summary
          </div>
          <div className="relative ">
            <button
              className="px-2 py-2 rounded-lg w-28 text-[#d23766] font-semibold flex justify-around items-center bg-[#fceff3] tracking-tight leading-6 truncate"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedItem} <KeyboardArrowDownIcon />
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 w-24 mt-1 bg-white shadow-lg rounded-lg">
                {dropdownItems.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 md:text-lg text-sms py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedItem(item);
                      setDropdownOpen(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
       

      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    </>
  );
};
export default Chart;