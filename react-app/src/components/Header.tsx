import React, { useEffect, useState } from 'react'
import { callToActions, menuItems } from '../constants/data'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';
import { RiMenu3Line } from 'react-icons/ri';
import { generalStyles, navMenuStyles } from '../constants/styles';
import { IoClose } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';

const Header = ({toggleModal}:{toggleModal: ()=> void}) => {

    // const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 30){
            document.body.querySelector("#header")?.classList.add("header-scrolled");
        }else{
            document.body.querySelector("#header")?.classList.remove("header-scrolled");
        }
    })

    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(()=>{
        const currentTheme = localStorage.getItem("theme");
        return currentTheme ? false : true;
    });

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

    const navActiveClass = ({ isActive}:{isActive: any}) => {
        return isActive ? "activeLink" : "";
      };

  return (
    <header id='header' className="bg-secondary-background-color fixed w-full py-[5px] left-[0] top-[0] z-[999]">
        <nav className={`${generalStyles.container} ${generalStyles.flexCenterBetween}`}>
            <Link to="/">
                <h2 className='text-md text-light-color font-bold'>News Flash</h2>
            </Link>

            <div className={`${isMenuOpen ? navMenuStyles.navMenuOpen : navMenuStyles.navMenuClose}`}>
                <ul className={isMenuOpen ? navMenuStyles.navMenuOpenList : navMenuStyles.navMenuCloseList}>
                    {menuItems.map((item,index)=>{
                     return (
                        <li key={index} className='hover:text-light-color transition-all'>
                            <NavLink className={navActiveClass} to={item.link}>{item.title}</NavLink>
                        </li>
                     )
                    })}
                    {callToActions.map((item,index)=>{
                     return (
                        <li key={index} className='md:hidden block hover:text-light-color transition-all'>
                            <NavLink  className={navActiveClass} to={item.link}>{item.title}</NavLink>
                        </li>
                     )
                    })}
                </ul>
            </div>

            <div className="flex items-center gap-[15px]">
                <button onClick={()=> setDarkMode(!darkMode)} className='hover:text-light-color transition-all'>
                    {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
                </button>
                <button onClick={()=> toggleModal()} className='hover:text-light-color transition-all'>
                    <FaSearch size={18} />
                </button>
                <button className='md:hidden block hover:text-light-color transition-all' onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <IoClose size={20} />   : <RiMenu3Line size={20} />}
                </button>
                <ul className='hidden md:flex items-center gap-[10px]'>
            {callToActions.map((item,index)=>{
                     return (
                        <li key={index} className='hover:text-light-color transition-all'>
                            <NavLink  className={navActiveClass} to={item.link}>{item.title}</NavLink>
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