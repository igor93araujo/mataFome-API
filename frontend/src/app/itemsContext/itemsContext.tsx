'use client'
import React, { createContext, useState, useEffect } from 'react';
import { requestAPi } from '@/app/services/services';

type contextType = {
  products: Array<unknown>,
  selectedCategory: string,
  setSelectedCategory: Function,
  setProducts: Function,
}

export const ItemsContext = createContext <contextType | undefined>(undefined);

type ItemsProviderProps = {
  children: React.ReactNode,
}

export const ItemsProvider = ({ children }: ItemsProviderProps) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const getProducts = async (selectedCategory: any) => {
    const products = await requestAPi(selectedCategory || 2);
    setProducts(products);
  };

  useEffect(() => {
    getProducts(selectedCategory);
  }, [ selectedCategory ]);

  const props = {
    products,
    selectedCategory,
    setSelectedCategory,
    setProducts,
  }

  return (
    <ItemsContext.Provider value={props}>
      {children}
    </ItemsContext.Provider>
  );
}