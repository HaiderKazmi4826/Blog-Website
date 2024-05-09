import React from 'react'
import { generalStyles, sectionStyle } from '../constants/styles'
import { olderPosts } from '../constants/data'
import { TbSquareRotated } from 'react-icons/tb'

const OlderPosts = () => {
  return (
    <section className={sectionStyle}>
      <div className={generalStyles.container}>
      <h2 className="section-title" data-text="older posts">Older posts</h2>

      <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 max-w-[100%] lg:max-w-[90%] xl:max-w-[100%] mx-auto'>
       {
        olderPosts.map((item,index)=>{
            return(
                <article key={index} className='flex flex-col xl:flex-row h-auto'>
                   <img className='w-full h-[300px] sm:h-[250px] object-cover' src={item.url} alt="" />
                   <div className='p-[15px] flex flex-col justify-center bg-secondary-background-color'>
                   <div className="flex items-center text-xsm gap-[22px] mb-[5px]">
                    <span>{item.date}</span>
                    <span>
                      <TbSquareRotated
                        fill="white"
                        size={10}
                        className="text-light-color"
                      />
                    </span>
                    <span>{item.time}</span>
                  </div>
                  <h4 className='text-md text-light-color font-bold capitalize'>{item.title}</h4>
                  <p className='text-sm mt-[10px]'>{item.desc}</p>
                   </div>
                </article>
            )
        })
       }
      </div>
      </div>
    </section>
  )
}

export default OlderPosts