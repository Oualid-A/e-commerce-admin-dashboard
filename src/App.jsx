import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./screens/Dashboard";
import Products from "./screens/Products"; 
import Users from "./screens/Users"; 
import Orders from "./screens/Orders"; 
import Shopping from "./screens/Shopping"; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
          <Route path="shopping" element={<Shopping />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
