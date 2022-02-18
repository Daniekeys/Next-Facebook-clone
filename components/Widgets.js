import React from 'react'
import { DotsHorizontalIcon,VideoCameraIcon, SearchIcon }  from '@heroicons/react/solid';
import Contact from './Contact'
const contacts  = [
    {
        name:'Ayeni Daniel',
        src:'https://links.papareact.com/zof',
       
    },
    {
        name:'Elon Musk',
        src:'https://links.papareact.com/4zn',
        
    },
    {
        name:'Jeff Bezoz',
        src:'https://links.papareact.com/k2j',
       
    },
    {
        name:'Mark Zuckerberg',
        src:'https://links.papareact.com/xql',
       
    },
    {
        name:'Bill Gates',
        src:'https://links.papareact.com/4u4',
      
    },
];
const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60  p-2 mt-5">
    <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-2xl "> Contacts</h2>
        <div className="flex space-x-4 ">
        <VideoCameraIcon className="h-6" />
        <SearchIcon className="h-6" />
        <DotsHorizontalIcon className="h-6" />
    </div>
    </div>
    {contacts.map((contact,index)=>(
        <Contact key={index} src={contact.src} name={contact.name} />

    ))}
    </div>
  )
}

export default Widgets