import React, { useState } from "react";
import MyProducts from "../components/products/Products";
import AddProduct from "../components/products/AddProduct";

const Products = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSaveProduct = (product) => {
    console.log(product);
  };

  return (
    <>
      <div className="border-b-2  bg-[#fff] px-10 py-7 flex justify-between items-center">
        <h1 className="font-semibold text-3xl">Products</h1>
        <button onClick={handleDialogOpen} className="text-center border-2 hover:border-black rounded-3xl px-6 py-2 hover:bg-white bg-black hover:text-black text-white transition duration-300 ease-in-out">Add Product</button>
      </div>
      <AddProduct 
       open={dialogOpen}
       handleClose={handleDialogClose}
       handleSave={handleSaveProduct}
       />
      <div className="p-4 flex flex-col gap-4 bg-[#f4f5fa] h-auto ">
        <MyProducts />
      </div>
    </>
  );
};

export default Products;
