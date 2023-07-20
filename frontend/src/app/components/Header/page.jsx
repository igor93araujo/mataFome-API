import React from 'react'
import { IoFastFoodOutline } from 'react-icons/io5'
import { TiShoppingCart } from 'react-icons/ti'

function Header() {
  return (
    <header className='flex justify-between items-center gap-5 w-[100%] p-3 shadow-md'>
     <div className='flex items-center gap-5 ml-5'>
        <IoFastFoodOutline size={50} />
        <h1>Lanchonete Mata-Fome</h1>
      </div>
      <div className='cursor-pointer mr-5'>
        <TiShoppingCart size='40px' />
      </div>
    </header>
  )
}

export default Header