/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext } from 'react'
import product from '@/types/product.type'
import Loading from '../Loading/page'
import { ItemsContext } from '@/app/itemsContext/itemsContext'


export default function Content() {
  
  const context = useContext(ItemsContext);

  if (!context) {
    return <Loading />
  }

  type contextType = {
    products: Array<product>,
  }

  const { products } = context as contextType;

  return (
    <div className='flex gap-10 justify-center items-center'>
      {
        products ?
        products.map((product: product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <img src={product.image} alt="productImg" />
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        )) : <Loading />
      }
    </div>
  )
}
