import React, { useState } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const Orders = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 ">
      <div className="flex items-center justify-center my-8">
        <div className="bg-[#f4f5fa] border border-gray-300 h-[11rem] w-[11rem] rounded-full flex items-center justify-center">
          <ShoppingBagOutlinedIcon style={{ fontSize: 80, color: "#9ca3af" }} />
        </div>
      </div>
      <div className="text-center mb-6 space-y-3">
        <div className="text-xl font-medium ">No Orders Yet?</div>
        <div className="text-gray-500 font-normal">
          Add products to your store and start
          <br /> selling to see orders here.
        </div>
      </div>
      <button
        onClick={handleClickOpen}
        className="bg-[#d23766] text-white px-4 py-2 rounded-xl flex items-center"
      >
        <FavoriteBorderIcon className="mr-2" />
        New Product
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="border mb-3 text-[#d2376f] font-bold">
          Add New Product
        </DialogTitle>
        <DialogContent>
          <form action="" autoComplete="off">
            <div className="flex flex-col space-y-4 items-center w-[30rem] ">
              <div className="flex flex-col space-y-1 w-full">
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product name"
                  className="p-3 border text-lg font-normal rounded-lg"
                  autoComplete="false"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1 w-full ">
                <label className="font-semibold">Description</label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Product Description"
                  className="p-3 border text-lg font-normal rounded-lg"
                />
              </div>
              <div className="flex flex-row w-full space-x-3 ">
                <div className="flex flex-col space-y-1  w-1/2">
                  <label className="font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="Qte"
                    id="Qte"
                    placeholder="Product Quantity"
                    className="p-3 border text-lg font-normal rounded-lg"
                  />
                </div>
                <div className="flex flex-col space-y-1  w-full">
                  <label className="font-semibold">Price</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Product price"
                    className="p-3 border text-lg font-normal rounded-lg w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1 w-full ">
                <label className="font-semibold">Picture</label>
                <input
                  type="file"
                  name="picture"
                  id="picture"
                  placeholder="Product picture"
                  accept=".png, .jpg, .jpeg"
                  className="p-3 border text-lg font-normal rounded-lg"
                />
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions className="p-4 gap-4 border">
          <Button onClick={handleClose} className="border p-2 text-[#d23760]">
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            className="bg-[#d23760] text-white font-semibold"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Orders;
