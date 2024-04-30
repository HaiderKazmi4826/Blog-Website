import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { modalStyles } from '../constants/styles'


const SearchModal = ({visibility, closeModal}:{visibility:boolean, closeModal: ()=> void}) => {
  return (
    <div className={`${visibility ? modalStyles.modalOpen : modalStyles.modalClose} transition-all flex items-center justify-center fixed w-full h-screen left-[0] top-[0] opacity-[1] z-[9999] bg-primary-background-color`}>
      <button onClick={()=> closeModal()} className='absolute top-[2%] right-[5%] border-solid border-[2px] border-secondary-background-color rounded-sm p-[3px]'>
        <IoClose size={25} />
      </button>
       <div className=''>
         <form action="" className='flex items-center justify-center ps-[15px] w-[300px] h-[60px] border-solid border-[2px] border-secondary-background-color rounded-md'>
          <input type="text" className='h-full' placeholder='What are you looking for?' />
          <button type='submit' className='bg-secondary-background-color border-solid border-[2px] border-secondary-background-color h-full w-[70px] flex items-center justify-center rounded-sm'>
             <FaSearch size={25} />
          </button>
         </form>
       </div>
    </div>
  )
}

export default SearchModal