import React from 'react'
import Nav from './Nav'
import Banner from './Banner'

const HomeScreen = () => {
  return (
    <div className='app'>
        <div className="homescreen">
            <Nav/>
            <Banner/>
        </div>
    </div>
  )
}

export default HomeScreen