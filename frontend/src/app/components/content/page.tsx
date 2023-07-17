/* eslint-disable @next/next/no-img-element */
'use client'
import { requestAPi } from '@/app/services/services'
import product from '@/types/product.type'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'


export default function Content() {
    const [products, setProducts] = useState([])

    async function getProducts() {
      const products = await requestAPi(1)
        setProducts(products)
       }

    useEffect(() => {
      getProducts()
    }, [])

  return (
    <div>
      { products && products.map((product: product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <img src={ product.image} alt="productImg" />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))
      }
    </div>
  )
}
