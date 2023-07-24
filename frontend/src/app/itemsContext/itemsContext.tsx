'use client'
import React, { createContext, useState, useEffect } from 'react';
import { requestAPi } from '@/app/services/services';

type contextType = {
  products: Array<unknown>,
  selectedCategory: string,
  setSelectedCategory: Function,
  setProducts: Function,
}

type product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: number;
  quantity: number; // Adicione esse campo
};

export const ItemsContext = createContext <contextType | undefined>(undefined);

type ItemsProviderProps = {
  children: React.ReactNode,
}

export const ItemsProvider = ({ children }: ItemsProviderProps) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showProdDetails, setShowProdDetails] = useState(false);
  const [productDetails, setProductDetails] = useState('');
  const [cart, setCart] = useState([]);
  const [ quantity, setQuantity ] = useState(1);


  const getProducts = async (selectedCategory: any) => {
    const products = await requestAPi(selectedCategory || 2);
    setProducts(products);
  };

  const addToCart = (product: product, quantity: number) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    console.log('existingProduct', existingProduct)

    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      const updatedCart = cart.map((item) => {
        item.id === product.id ? { ...item, quantity: item.quantity + Number(quantity) } : item
      }
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with the selected quantity
      setCart([...cart, { ...product, quantity }]);
    }
  };


  useEffect(() => {
    getProducts(selectedCategory);
  }, [ selectedCategory ]);

  const props = {
    products,
    selectedCategory,
    setSelectedCategory,
    setProducts,
    showProdDetails,
    setShowProdDetails,
    productDetails,
    setProductDetails,
    cart,
    addToCart,
    setCart,
    quantity,
    setQuantity,
  }

  return (
    <ItemsContext.Provider value={props}>
      {children}
    </ItemsContext.Provider>
  );
}