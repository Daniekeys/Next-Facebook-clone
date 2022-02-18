import React from 'react'
import Image from 'next/image'

const SidebarRow = ({src,Icon,title}) => {
  return (
    <div className="flex items-center space-x-2 md:p-4 p-2 hover:bg-gray-200 rounded-xl cursor-pointer">
        {src && <Image src={src} width={50} height={50} 
        className="rounded-full" layout="fixed" />}
        {Icon && <Icon className="h-8 w-8 text-blue-500" />}
        <p className="hidden sm:inline-flex font-semibold">
            {title}
        </p>


        </div>
  )
}

export default SidebarRow