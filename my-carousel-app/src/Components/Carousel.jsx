import React, { useState } from 'react'
import Image  from './Image'
const Carousel = () => {

      const [image, setImage] = useState(null);

        const images =  [
             {
                id:1 ,
                url: "https://plus.unsplash.com/premium_photo-1666672388644-2d99f3feb9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                linkText: "click to view"
            }
        ]  
          
        const handleImageClick  = (imgLink)=> {
             setImage(imgLink);
        }
  return (
    <div className='flex justify-center items-center h-screen border-red-700 '>
        <div className='bg-blue-500 text-white p-10 rounded-md'>
           {images.map((img)=> (
            <a className= "cursor-pointer" key={img.id} onClick={() => handleImageClick(img.url)}>
                {img.linkText}
            </a>
           ))}
        </div>
        {image && <Image imgLink={image} onClose ={()=> setImage(null) } />}
    </div> 
  )
}

export default Carousel
