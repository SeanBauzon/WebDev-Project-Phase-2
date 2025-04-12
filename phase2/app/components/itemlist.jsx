"use client"; // Add this line at the top of your file

import React, { useState, useEffect } from 'react';

const ItemList = () => {
  const mockProducts = [
    {
      id: 1,
      name: 'Gaming Monitor',
      description: '144Hz, 27-inch display',
      price: '$249.99',
      image: '/images/monitor.jpg', 
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      description: 'RGB, Blue switches',
      price: '$89.99',
      image: '/images/keyboard.jpg',
    },
    { 
      id: 3, 
      name: 'Wireless Mouse', 
      description: 'Ergonomic and wireless', 
      price: '$49.99', 
      image: '/images/mouse.jpg'
    },
    { 
      id: 4, 
      name: 'Smartphone', 
      description: 'Latest model', 
      price: '$799.99', 
      image: '/images/smartphone.jpg'
    },
    { 
      id: 5, 
      name: 'Bluetooth Speaker', 
      description: 'Portable and waterproof', 
      price: '$99.99', 
      image: '/images/speaker.jpg' 
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mockProducts); 
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 py-4 m-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-32 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.description}</p>
          <p className="mt-2 font-bold text-gray-800">{product.price}</p>
          <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-full">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
