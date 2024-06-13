"use client"
import { Link } from 'react-scroll';

import  './navbar.scss';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useState } from 'react';
const Navbar = () => {
    const [openFlags, setOpenFlag] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const handleFlags = () => {
        setOpenFlag(!openFlags)
    };
  return (
    <div className='navbar'>
        <div className="left">
            <Link           
                to="home" 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500} 
                onClick={()=>setOpenNav(false)}
            >
            <h1>OBSÈQUES DE PAPA</h1>
            <p>Feuyou emmanuel</p>
            </Link>
        </div>
        
        <div className={`${openNav ? "handyMenu":"right"}`}>
            <ul>
                <li>
                    <Link 
                        activeClass="active" 
                        to="fairePart" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={500} 
                        onClick={()=>setOpenNav(false)}
                      
                    >
                    Faire part
                    </Link>
                </li>
                <li>
                    <Link 
                    activeClass="active" 
                        to="programme" 
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={500} 
                        onClick={()=>setOpenNav(false)}
                    >
                    Programme
                    </Link>
                </li>
                <li>
                    <Link 
                    activeClass="active" 
                        to="temoignages" 
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={500} 
                        onClick={()=>setOpenNav(false)}
                    
                    >
                    Témoignages
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active" 
                        to="biographie" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={500} 
                        onClick={()=>setOpenNav(false)}
                    >
                    Biographie
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active" 
                        to="plan" 
                        spy={true} 
                        smooth={true} 
                        offset={-0} 
                        duration={500} 
                        onClick={()=>setOpenNav(false)}
                    >
                    Plan de localisation
                    </Link>
                </li>
           {/* <div className="flags">
                {openFlags ? 
                <span className="fi fi-gb" onClick={handleFlags} ></span>:
                <span className="fi fi-fr"  onClick={handleFlags} ></span> }
           </div> */}
            </ul>
        </div>
        <div className="hamburgerMenu" onClick={()=>setOpenNav(!openNav)}>
                    <hr className={`${openNav ? "leftMenu":""}`} />
                    <hr className={`${openNav ? "centerMenu":""}`}  />
                    <hr className={`${openNav ? "rightMenu":""}`}  />
        </div>
    </div>
  )
}

export default Navbar