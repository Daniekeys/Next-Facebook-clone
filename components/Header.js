import React from 'react';
import Image from 'next/image';
import {
    BellIcon,
    ChatIcon,
    HomeIcon,
    ChevronDownIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid';
import  {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import {useSession} from 'next-auth/react'; 
import {signOut} from 'next-auth/react';
const Header = () => {
    const { data: session, status } = useSession()

  return (
      <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md ">
        
        {/* Left */}
        <div className="flex items-center">
            <Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" />
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600" />
                <input type="text" placeholder="Seach Facebook"
                className="flex ml-2   md:inline-flex items-center bg-transparent outline-none  flex-shrink placeholder-gray-500"
                />
            </div>
        </div>

        {/* center */}
        <div className="  flex justify-center flex-grow">
        <div className=" hidden  md:flex space-x-6 md:space-x-3">
        <HeaderIcon active Icon={HomeIcon}  />
        <HeaderIcon Icon={FlagIcon}  />
        <HeaderIcon Icon={PlayIcon}  />
        <HeaderIcon Icon={ShoppingCartIcon}  />
        <HeaderIcon Icon={UserGroupIcon}  />
        </div>
        </div>

        {/* Right */}
        <div className="flex items-center sm:spacing-x-4 justify-end ">
           {/* Profile pic */}
           <Image 
           onClick={signOut}
           className="rounded-full cursor-pointer mr-4"
           src={session.user.image}
       
              width={40}
                height={40}
                layout="fixed"
              />
           <p className=" hidden md:flex whitespace-nowrap font-semibold pr-3">
               {session.user.name}
           </p>
           <ViewGridIcon className="icon" />
           <ChatIcon className="icon" />
           <BellIcon className="icon" />
           <ChevronDownIcon className="icon" />
        </div>
      </div>
  );
};

export default Header;
