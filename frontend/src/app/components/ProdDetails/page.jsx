import { ItemsContext } from '@/app/itemsContext/itemsContext'
import React, { useContext } from 'react'

export default function ProductDetails() {
 //importando o showDetails do contexto
  const { setShowProdDetails, products } = useContext(ItemsContext )

  const hideDetails = () => {
   setShowProdDetails(false)
  }

  return (
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={hideDetails}
   >
          <div className="bg-white p-4 rounded w-80 animate-prodDetailAnimation" 
            style={{ animationDuration: '5s' }}
          >
            <h2 className="text-xl font-bold mb-4">Título do Pop-up</h2>
            <p className="mb-4">{products.description}</p>
            <button onClick={hideDetails} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
              Fechar
            </button>
          </div>
        </div>
  )
}
