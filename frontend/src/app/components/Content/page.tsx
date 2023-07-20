'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from 'react';
import product from '@/types/product.type';
import Loading from '../Loading/page';
import { ItemsContext } from '@/app/itemsContext/itemsContext';
import { TiShoppingCart } from 'react-icons/ti';

export default function Content() {
  const context = useContext(ItemsContext);

  if (!context) {
    return <Loading />;
  }

  type contextType = {
    products: Array<product>;
  };

  const { products } = context as contextType;

  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleHoverProduct = (productId: number) => {
    setHoveredProduct(productId);
  };

  const handleAddToCart = (productId: number) => {
    console.log(`Product ${productId}, added to cart with quantity ${quantity}`);
  };

  return (
    <div className="flex gap-10 justify-center items-center mt-5">
      {products.map((product: product) => (
        <div
          key={product.id}
          className="flex flex-col items-center gap-2 bg-white p-5 rounded-lg shadow-xl hover:bg-yellow-300 hover:text-white transition duration-500 ease-in-out transform "
          onMouseEnter={() => handleHoverProduct(parseInt(product.id))}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <img src={product.image} alt="productImg" className="w-[150px] h-[150px] object-cover rounded-lg" />
          {hoveredProduct === parseInt(product.id) ? (
            <>
              <p className="text-sm text-black font-bold">R$ {product.price},00</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-black"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                  className="w-5 text-center bg-transparent text-black"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-black"
                >
                  +
                </button>
                <button
                  onClick={() => handleAddToCart(parseInt(product.id))}
                  className="bg-green-500 text-white p-2 rounded-full focus:outline-none"
                >
                  <TiShoppingCart size="20px" />
                </button>
              </div>
            </>
          ) : (
            <><h1 className="text-lg font-bold">{product.name}</h1>
            <p className="text-sm text-yellow-500 font-bold">R$ {product.price},00</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
