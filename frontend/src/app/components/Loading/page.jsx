import React from 'react'
import Image from 'next/image'
import loadingIcon from '../../../assets/loading/loading.png'

const Loading = () => {
  return (
      <Image
          className='animate-spin h-20 w-20 mr-3'
          src={loadingIcon}
          alt="loading"
          width={null}
          height={null}
        >
      </Image>
  )
}

export default Loading