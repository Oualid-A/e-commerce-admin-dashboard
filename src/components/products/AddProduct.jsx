import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const sizesAvailable = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
const colorsAvailable = ['Black', 'Green', 'Khaki'];

const AddProduct = ({ open, handleClose, handleSave }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    previousPrice: "",
    description: "",
    beforeImage: "",
    afterImage: "",
    size: [],
    color: [],
    availability: false,    
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.files[0] });
  };
 
  const onSave = () => {
    const formData = new FormData();
    Object.keys(newProduct).forEach(key => {
      if (key === 'beforeImage' || key === 'afterImage') {
        formData.append(key, newProduct[key]);
      } else {
        formData.append(key, newProduct[key]);
      }
    });
    
    handleSave(formData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a New Product</DialogTitle>
      <DialogContent>
        <TextField autoFocus margin="dense"  className="!rounded-3xl"  name="title" label="Product Title" type="text" fullWidth variant="outlined" value={newProduct.title} onChange={handleChange} />
        <div className="flex justify-between items-center gap-4">
            <TextField margin="dense" className="!rounded-3xl"  name="price" label="Price" type="number" fullWidth variant="outlined" value={newProduct.price} onChange={handleChange} />
            <TextField margin="dense" className="!rounded-3xl"  name="previousPrice" label="Previous Price" type="number" fullWidth variant="outlined" value={newProduct.previousPrice} onChange={handleChange} />
        </div>
        <TextField margin="dense"  className="!rounded-3xl" name="description" label="Description" type="text" fullWidth multiline rows={4} variant="outlined" value={newProduct.description} onChange={handleChange} />
        <div className="flex justify-between items-center gap-4">
        
        {/* File inputs for images */}
        <TextField margin="dense"  className="!rounded-3xl" name="beforeImage" type="file" fullWidth variant="outlined" onChange={handleImageChange} />
        <TextField margin="dense"  className="!rounded-3xl" name="afterImage" type="file" fullWidth variant="outlined" onChange={handleImageChange} />
        </div>
        {/* Select for sizes */}
        <FormControl fullWidth margin="dense">
          <InputLabel>Size</InputLabel>
          <Select multiple className="!rounded-3xl" name="size" value={newProduct.size} label="Size" onChange={handleChange}>
            {sizesAvailable.map((size) => (
              <MenuItem key={size} value={size}>{size}</MenuItem>
            ))}
          </Select>
        </FormControl>
        
        {/* Select for colors */}
        <FormControl fullWidth margin="dense">
          <InputLabel>Color</InputLabel>
          <Select multiple={true} className="!rounded-3xl" name="color" value={newProduct.color} label="Color" onChange={handleChange}>
            {colorsAvailable.map((color) => (
              <MenuItem key={color} value={color}>{color}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProduct;
