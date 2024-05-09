import React from 'react'
import { generalStyles, sectionStyle } from '../constants/styles'
import { MdOutlineMailOutline } from "react-icons/md";

const NewsLetter = () => {
  return (
    <section className={sectionStyle}>
        <div className={generalStyles.container}>
        <h2 className="section-title" data-text="newsletter">Newsletter</h2>
            <div className='w-full sm:max-w-[60%] lg:max-w-[50%] mx-auto'>
                <h2 className='text-lg text-center text-light-color font-bold'>Subscribe to NewsFlash</h2>
                <p className='my-[30px] max-w-[350px] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ex nihil.</p>
                <form action="" className='max-w-[400px] mx-auto mt-[40px] bg-transparent border-solid border-[2px] border-secondary-background-color rounded-sm flex items-center ps-[15px] h-[60px]'>
                    <input type="email" placeholder='Enter your email address' />
                    <button type='submit' className='h-full bg-secondary-background-color px-[18px]' >
                      <MdOutlineMailOutline size={20} />
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter