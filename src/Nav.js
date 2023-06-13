import React, { useEffect, useState } from 'react'
import './assets/css/Nav.css'

const Nav = () => {
    const[show, handleShow] = useState(false)
    const transitionNavBar = ()=>{
        if(window.scrollY>100){
            handleShow(true)
        } else handleShow(false)
    }
useEffect(()=>{
    window.addEventListener('scroll', transitionNavBar)
    return ()=> window.removeEventListener('scroll', transitionNavBar)
},[])

  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <div className="nav-content">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png" alt="netflix logo" className="nav-logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" className="nav-avatar" />
        </div>
    </div>
  )
}

export default Nav