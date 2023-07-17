'use client'
import { requestAPi } from '@/app/services/services'
import React, { useState, useEffect } from 'react'


export default function Content() {
    const [products, setProducts] = useState([])

    useEffect(() => {

        async function getProducts() {
       const products = await requestAPi(1)
         setProducts(products)
        }
       
    }, [])
  return (
    <div>
      { products.length > 0 && products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))
      }
    </div>
  )
}
