import React from 'react'

const Image = ({imgLink , onClose}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg p-6'>
         <img src={imgLink} alt="" className="w-full  h-56" />
         <button onClick={onClose} className='mt-4 px-4 py-2 bg-gray-200 rounded-md'>
            close
         </button>
      </div>
    </div>
  )
}

export default Image
