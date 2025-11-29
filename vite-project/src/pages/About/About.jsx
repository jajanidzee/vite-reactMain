import React from 'react'
import Header from '../../components/Header/Header'
import AboutRooted from '../../components/About/AboutRooted'

function About() {
  return (
    <div className='max-w-[1280px] m-auto pl-[50px] pr-[50px] pt-[20px]
 bg-[#EBC1AE]'>
      <Header/>
      <AboutRooted/>
    </div>
  )
}

export default About