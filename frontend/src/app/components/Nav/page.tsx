'use client'
import React, { useContext } from 'react'
import { GiFullPizza, GiBeerBottle } from 'react-icons/gi'
import { FaHamburger } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'
import { ItemsContext } from '@/app/itemsContext/itemsContext'
import Loading from '../Loading/page'

export default function Nav() {
  
  const context = useContext(ItemsContext);

  if (!context) {
    return <Loading />
  }

  type contextType = {
    setSelectedCategory: Function,
  }

  const { setSelectedCategory } = context as contextType;

  const handleCategory = (categoryId: any) => {
    setSelectedCategory(categoryId);
  }

  return (
    <section
      className='w-[100%] flex justify-center'>
        <nav className='flex gap-5 mb-2'>
          <span 
            onClick={() => handleCategory(2)}
            className= "navItem"
          >
            <GiFullPizza size='20px'/>
            <p>Pizza</p>
          </span>
          <span
            onClick={() => handleCategory(3)}
            className= "navItem"
            >
              <FaHamburger size='20px' />
              <p>Burgers</p>
            </span>
            <span
              onClick={() => handleCategory(1)}
              className= "navItem"
            >
              <GiBeerBottle size='20px'/>
              <p>Drinks</p>
            </span>
        </nav>
    </section>
  )
}
