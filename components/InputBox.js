import React,{useState} from 'react'
import Image from 'next/image'
import {useSession} from 'next-auth/react'; 
import {EmojiHappyIcon} from '@heroicons/react/outline'
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";
import {db,storage} from '../firebase'






const InputBox = () => {
      const { data: session, status } = useSession();
      const inputRef = React.useRef(null);
      const filepickerRef = React.useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
      const sendPost =(e) => {
          e.preventDefault();
          if (!inputRef.current.value) return;
          
          db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email:session.user.email,
            image: session.user.image,
            timestamp: new Date
          }).then(doc => {
            if(imageToPost) {
              const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url');

              removeImage();
              uploadTask.on('state_changed',null,error =>console.log(error), () => {
                // when the upload completes, we get the download URL
                storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                  db.collection('posts').doc(doc.id).set({ postImage: url }, { merge: true })
                });
              }
              )}
          })

          inputRef.current.value = '';
      }
      const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
          setImageToPost(readerEvent.target.result)
        }
      }
      const removeImage = () => {
        setImageToPost(null);
      }
      

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
    <div className="flex space-x-2 md:space-x-4 p-2 md:p-4 item-center">
      <Image 
           
           className="rounded-full cursor-pointer mr-4"
           src={session.user.image}
              width={40}
                height={40}
                layout="fixed"
              />
              <form className="flex flex-1">
    <input type="text" placeholder={`what is on your mind ${session.user.name}?`}
    ref={inputRef} 
    className="rounded-full h-12 bg-gray-100 px-5 flex-grow outline-none"
    />
    <button type="submit" hidden onClick={sendPost}>
    Submit

    </button>

     </form>
     {imageToPost && (
       <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
      <img src={imageToPost} className=" h-12 object-contain  " /> 
      <p className="text-xs text-red-500">Remove</p>
      </div>
     )}
    </div>
    <div className="flex justify-evenly p-3 border-t">

    <div className="inputIcon hidden md:block" >
    <VideoCameraIcon className="h-7 text-red-500" />
    <p className="text-xs sm:text-sm xl:text-base">
      Live Video
    </p>

    </div>
    <div onClick={() => filepickerRef.current.click()} className="inputIcon" >

    <CameraIcon className="h-7 text-green-400" />
    <p className="text-xs  sm:text-sm xl:text-base">
      Photo/Video
    </p>
    <input type="file" hidden onChange={addImageToPost} ref={filepickerRef} />
    </div>
    <div className="inputIcon" >

    <EmojiHappyIcon className="h-7 text-yellow-300" />
    <p className="text-xs sm:text-sm xl:text-base">
      Feeling/Activity </p>
    </div>
      </div>
    </div>
  )
}

export default InputBox