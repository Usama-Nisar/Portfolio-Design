import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <>
         <div className="header-wrapper">
             <div className="main-info">
                 <h1>Hello, I'm a Full Stack Develper</h1>
                 <Typed
                  className='typed'
                  strings={['Web Developer', 'Frontend Developer', 'Mern Stack Developer']}
                  typeSpeed={40}
                  backSpeed={40}
                  loop  />
                  <a href='#' className='btn-hero'></a>

             </div>
        </div>   
        </>
    )
}

export default Header
