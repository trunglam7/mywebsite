import React, {useState} from 'react'
import logo from '../images/mylogo.png'
import {FaGithubSquare, FaLinkedin, FaBehanceSquare} from 'react-icons/fa'
import {ImMenu, ImCross} from 'react-icons/im'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const clickHandler = () => setClick(!click)

  return (
    <nav className='navbar'>
        <div className='container'>
            <div className='left-side'>
                <img className='logo-img' src={logo} alt=''/>
                <div className='name'>Trung Lam</div>
            </div>
            
            <div className='right-side'>
                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <a href='https://www.linkedin.com/in/trung-lam-8190a0177/' rel="noopener noreferrer" target='_blank'>
                        <FaLinkedin className='social-icon'/> {click ? 'Linkedin' : null}
                    </a>
                    <a href='https://github.com/trunglam7' rel="noopener noreferrer" target='_blank'>
                        <FaGithubSquare className='social-icon'/> {click ? 'Github' : null}
                    </a>
                    <a href='https://www.behance.net/trunglam4' rel="noopener noreferrer" target='_blank'>
                        <FaBehanceSquare className='social-icon'/> {click ? 'Behance' : null}
                    </a>
                </div>
                <div className='menu-btn' onClick={clickHandler}>
                    {click ? (<ImCross />) : (<ImMenu />)}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar