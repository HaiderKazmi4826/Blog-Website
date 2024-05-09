import React from 'react';
import { generalStyles } from '../constants/styles';
import { FaDribbble, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { footerItems } from '../constants/data';


const Footer = () => {
  return (
    <footer className='bg-secondary-background-color py-[40px]'>
        <div className={`${generalStyles.container} flex lg:flex-row flex-col gap-[40px] lg:gap-[0px]`}>
            <div>
            <div>
                <h3 className='text-light-color text-md'>NewsFlash</h3>
                <p className='max-w-[500px] my-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum ratione eius explicabo cum eos delectus aliquam doloribus necessitatibus adipisci!</p>
                 <div className='mt-[25px] flex items-center gap-[15px]'>
                   <a href="#"><FaInstagram size={20} /></a>
                   <a href="#"><FaFacebook size={20} /></a>
                   <a href="#"><FaTwitter size={20} /></a>
                   <a href="#"><FaDribbble size={20} /></a>
                 </div>
            </div>
            </div>
            <div className='flex-1 justify-between lg:pr-[10%] flex gap-[30px] flex-wrap'>
                 {
                  footerItems.map((item)=>{
                    return (
                      <div>
                        <h5 className='uppercase text-light-color text-sm font-semibold mb-[15px]'>{item.title}</h5>
                        <div className='flex flex-col gap-[10px]'>
                          {
                            item.links.map((link)=>{
                              return (
                                <a className='capitalize transition-all hover:text-light-color' href={link.url}>{link.name}</a>
                              )
                            })
                          }
                        </div>
                      </div>
                    )
                  })
                 }
            </div>
        </div>
        <div className={generalStyles.container}>
           <p className='text-sm text-center mt-[40px]'>
           ©2021 NewsFlash. All rights reserved.
           </p>
        </div>
    </footer>
  )
}

export default Footer