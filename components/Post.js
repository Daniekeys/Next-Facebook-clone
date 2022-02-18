import React from 'react'
import Image from 'next/image'
import {ChatAltIcon, ShareIcon, ThumbUpIcon} from '@heroicons/react/outline'

function Post({
    name, message , email, timestamp, image, postImage
}) {
    
  return (
    <div className="flex flex-col">
        <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
        <img className="rounded-full " src={image} alt="" width={40} height={40}/>
        <div>
            <p className="text-sm font-meduim">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-500">{new Date(timestamp?.toDate()).toUTCString()}</p>) :(
                  <p className="text-xs text-gray-400">loading..</p>
              )
            }
          
        
        </div>
            </div>
            <p className="pt-4">{message}</p>
            </div>
{postImage && (
    <div className="relative h-56 md:h-96 bg-white">
        <Image src={postImage} objectFit="cover" layout="fill"  />
    </div>
)}
{/* FOOTER OF THE POST */}
    <div className="flex justify-between items-center rounded-b-2xl bg-white text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
            <ThumbUpIcon className="h-4 text-gray-400" />
            <p className="text-xs sm:text-base">
                Like
            </p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
            <ChatAltIcon className="h-4 text-gray-400" />
            <p className="text-xs sm:text-base">
                Comment
            </p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
            <ShareIcon className="h-4 text-gray-400" />
            <p className="text-xs sm:text-base">
                Share
            </p>
        </div>
    </div>
    </div>
  )
}

export default Post