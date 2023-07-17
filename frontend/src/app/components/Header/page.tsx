import React from 'react'
import { GiFullPizza, GiBeerBottle } from 'react-icons/gi'
import { FaHamburger } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'

export default function Header() {
  return (
    <aside>
        <nav>
            <GiFullPizza />
            <FaHamburger />
            <GiBeerBottle />
            <TiShoppingCart />
        </nav>
    </aside>
  )
}
