import React, { useEffect, useState } from "react";
import { getProduct } from "../../service/ProductService";

const MyProducts = () => {
  const [items, setItems] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getProduct();
      setItems(response);
    })();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="bg-white border border-black flex flex-col rounded-2xl p-2 px-6 space-y-4 hover:shadow-lg transition duration-300 ease-in-out"
          onMouseEnter={() => setHoveredProductId(item.id)}
          onMouseLeave={() => setHoveredProductId(null)}
        >
          <div className="text-center self-center">
            <img 
              src={hoveredProductId === item.id ? item.afterImage : item.beforeImage} 
              alt={item.title} 
              className="w-56 h-56 transition duration-300 ease-in-out" 
            />
          </div>
          <div className="title">
            <p className="text-gray-600">{item.title}</p>
          </div>
          <div className="price">
            <h1>
              {item.previousPrice && <span className="line-through">€{item.previousPrice}</span>} <span>€{item.price}</span>
            </h1>
          </div>
          <div className="self-center">
            <button type="button" className="text-center border-2 border-black rounded-3xl px-6 py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out">More Informations</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
