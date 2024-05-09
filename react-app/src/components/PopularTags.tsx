import React from 'react'
import { generalStyles, sectionStyle } from '../constants/styles'
import { popularTags } from '../constants/data'

const PopularTags = () => {
  return (
    <section className={sectionStyle}>
      <div className={`${generalStyles.container}`}>
      <h2 className="section-title" data-text="popular tags">Popular tags</h2>
       <div className='w-full grid gap-[20px] sm:grid-cols-2 xl:grid-cols-3'>
          {
            popularTags.map((item,index)=>{
                return(
                    <article className='relative overflow-hidden' key={index}>
                      <img className='w-full transition-all duration-300 hover:scale-[1.1] h-[200px] object-cover' src={item.url} alt="" />
                      <div className='absolute top-[50%] left-[50%] uppercase text-light-color font-semibold px-[15px] py-[10px] text-sm translate-x-[-50%] translate-y-[-50%] bg-primary-background-color'>#{item.category}</div>
                    </article>
                )
            })
          }
       </div>
       </div>
    </section>
  )
}

export default PopularTags