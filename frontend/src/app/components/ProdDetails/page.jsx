import { ItemsContext } from '@/app/itemsContext/itemsContext'
import React, { useContext } from 'react'
import { motion } from "framer-motion"

export default function ProductDetails() {
  const { setShowProdDetails, products, productDetails } = useContext(ItemsContext )

  const hideDetails = () => {
   setShowProdDetails(false)
  }

  return (
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={hideDetails}
   >
          <motion.div className="bg-white p-4 rounded w-80 "
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }} 
          >
            <h2 className="text-xl font-bold mb-4">{productDetails.name}</h2>
            <p>Ingredientes:</p>
            <p className="mb-4">{productDetails.description}</p>
            <button onClick={hideDetails} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
              Fechar
            </button>
          </motion.div>
        </div>
  )
}
