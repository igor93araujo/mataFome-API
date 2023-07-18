/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect } from 'react'
import { requestAPi } from '@/app/services/services'
import product from '@/types/product.type'
import Loading from '../Loading/page'


export default function Content() {
    const [products, setProducts] = useState([])

   const getProducts = async () => {
      const products = await requestAPi(1)
        setProducts(products)
       }

    useEffect(() => {
      getProducts()
    }, [])

  return (
    <div 
      className='bg-red-200 h-[100%] w-[90%] flex justify-center items-center'
    >
      { products ? products.map((product: product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <img src={ product.image} alt="productImg" />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      )): <Loading />
      } 
    </div>
  )
}
