import React from 'react'
import Image from 'next/image'
const Contact = ({src, name}) => {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
<Image src={src} width={50} height={50} layout="fixed" objectFit="cover" className="rounded-full" />
<p>{name}</p>
<div className="absolute bottom-2 left-7 bg-green-400 h-4 w-4 rounded-full ">

</div>
    </div>
  )
}

export default Contact