import React, { useEffect, useState } from 'react'
import { callToActions, menuItems } from '../constants/data'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';
import { RiMenu3Line } from 'react-icons/ri';
import { generalStyles, navMenuStyles } from '../constants/styles';
import { IoClose } from 'react-icons/io5';

const Header = ({toggleModal}:{toggleModal: ()=> void}) => {

    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(()=>{
        const currentTheme = localStorage.getItem("theme");
        return currentTheme ? false : true;
    })
    
    useEffect(()=>{
        
        if(darkMode){
            localStorage.removeItem("theme")
        }else{
            localStorage.setItem("theme", "light");
        }
        
        const toggleTheme = ()=>{
            const currentTheme = localStorage.getItem("theme");
            
            if(currentTheme === "light"){
                document.querySelector("body")?.classList.add("light");
                
            }else{
                document.querySelector("body")?.classList.remove("light");
            }
        }
        
        toggleTheme();
        
    }, [darkMode]); 

  return (
    <header className="bg-secondary-background-color fixed w-full left-[0] top-[0] z-[999]">
        <nav className={`${generalStyles.container} ${generalStyles.flexCenterBetween} px-[15px] sm:px-[0]`}>
            <a href="">
                <h2 className='text-md text-light-color'>News Flash</h2>
            </a>

            <div className={`${isMenuOpen ? navMenuStyles.navMenuOpen : navMenuStyles.navMenuClose}`}>
                <ul className={isMenuOpen ? navMenuStyles.navMenuOpenList : navMenuStyles.navMenuCloseList}>
                    {menuItems.map((item,index)=>{
                     return (
                        <li key={index} className='hover:text-light-color transition-all'>
                            <a href={item.link}>{item.title}</a>
                        </li>
                     )
                    })}
                    {callToActions.map((item,index)=>{
                     return (
                        <li key={index} className='md:hidden block'>
                            <a href={item.link}>{item.title}</a>
                        </li>
                     )
                    })}
                </ul>
            </div>

            <div className="flex items-center gap-[10px]">
                <button onClick={()=> setDarkMode(!darkMode)}>
                    {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
                </button>
                <button onClick={()=> toggleModal()}>
                    <FaSearch size={18} />
                </button>
                <button className='md:hidden block' onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <IoClose size={20} />   : <RiMenu3Line size={20} />}
                </button>
                <ul className='hidden md:flex items-center gap-[10px]'>
            {callToActions.map((item,index)=>{
                     return (
                        <li key={index} className=''>
                            <a href={item.link}>{item.title}</a>
                        </li>
                     )
                    })}
            </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header