import React from 'react'
import CTA from './CTA'
// imprt me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h1>Elizaveta Firsova</h1>
            <h5 className="text-dark">Software Developer</h5>
            <CTA/>
            <HeaderSocials/>
            {/* <div> meww</div> */}

            <div className='me'> 
            <>mew</>
            {/* <img src='' alt='me' ></img> */}
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header