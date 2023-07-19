'use client'
import React, { useContext } from 'react'
import { GiFullPizza, GiBeerBottle } from 'react-icons/gi'
import { FaHamburger } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'
import { ItemsContext } from '@/app/itemsContext/itemsContext'
import Loading from '../Loading/page'

export default function Aside() {
  
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
    <aside
      className='bg-red-500 h-[100%] w-[10%] flex justify-center items-center p-5'>
        <nav className='flex gap-2 flex-col'>
          <span 
            onClick={() => handleCategory(2)}
            className='cursor-pointer'
          >
            <GiFullPizza size='40px'/>
          </span>
          <span
            onClick={() => handleCategory(3)}
            className='cursor-pointer'
            >
              <FaHamburger
                size='40px'
                
              />
            </span>
            <span
              onClick={() => handleCategory(1)}
              className='cursor-pointer'
            >
              <GiBeerBottle size='40px'/>
            </span>
            <span
              className='cursor-pointer'
            >
              <TiShoppingCart size='40px'/>
            </span>
        </nav>
    </aside>
  )
}
