import { ItemsContext } from '@/app/itemsContext/itemsContext'
import React, { useContext } from 'react'
import { motion } from "framer-motion"

export default function ProductDetails() {
  const { setShowProdDetails, productDetails, addToCart, quantity } = useContext(ItemsContext )

  const hideDetails = () => {
   setShowProdDetails(false)
  }

  return (
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={hideDetails}
   >
          <motion.div className="bg-white p-4 rounded w-80"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }} 
          >
            <h2 className="text-xl font-bold mb-4 text-center">{productDetails.name}</h2>
            <p>Ingredientes:</p>
            <p className="mb-4">{productDetails.description}</p>
            <div>
              <button onClick={hideDetails} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                Fechar
              </button>
              <button 
                onClick={() => addToCart(productDetails, quantity)}
                className='mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded'
              >
                Adicionar ao carrinho
              </button>
            </div>
          </motion.div>
        </div>
  )
}
