import React from 'react'
import { GiFullPizza, GiBeerBottle } from 'react-icons/gi'
import { FaHamburger } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'

export default function Aside() {
  return (
    <aside
      className='bg-red-300 h-[100%] w-[10%] flex justify-center items-center p-5'>
        <nav className='flex gap-2 flex-col'>
            <GiFullPizza size='40px'/>
            <FaHamburger size='40px'/>
            <GiBeerBottle size='40px'/>
            <TiShoppingCart size='40px'/>
        </nav>
    </aside>
  )
}
