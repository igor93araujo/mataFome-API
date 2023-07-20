'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from 'react';
import product from '@/types/product.type';
import Loading from '../Loading/page';
import ProductDetails from '../ProdDetails/page';
import { ItemsContext } from '@/app/itemsContext/itemsContext';
import { AiOutlineShopping } from 'react-icons/ai';

export default function Content() {
  const context = useContext(ItemsContext);

  if (!context) {
    return <Loading />;
  }

  type contextType = {
    products: Array<product>;
    showProdDetails: boolean;
    setShowProdDetails: Function;
  };

  const { products, showProdDetails, setShowProdDetails } = context as unknown as contextType;

  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  const handleHoverProduct = (productId: number) => {
    setHoveredProduct(productId);
  };

  const handleAddToCart = (productId: number) => {
    console.log(`Product ${productId}, added to cart with quantity ${quantity}`);
  };

  const handleShowProdDetails = (productId: number) => {
    setShowProdDetails(true);
  };

  return (
    <>
      <div className="flex gap-10 justify-center items-center mt-5">
        {products.map((product: product) => (
          <div
            key={product.id}
            className="productCard"
            onMouseEnter={() => handleHoverProduct(parseInt(product.id))}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <img 
              src={product.image}
              alt="productImg"
              className="w-[150px] h-[150px] object-cover rounded-lg"
            />
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
                    <AiOutlineShopping size="20px" />
                  </button>
                </div>
              </>
            ) : (
              <><h1 className="text-lg font-bold">{product.name}</h1>
              <p className="text-sm text-yellow-500 font-bold">R$ {product.price},00</p>
              </>
            )}
                  <button
                    onClick={() => handleShowProdDetails(parseInt(product.id))}
                    className="bg-yellow-500 text-white p-2 rounded-full focus:outline-none"
                  >
                    Detalhes
                  </button>
          </div>
        ))}
      </div>
      {
        showProdDetails && <ProductDetails />
      }
    </>
  );
}
