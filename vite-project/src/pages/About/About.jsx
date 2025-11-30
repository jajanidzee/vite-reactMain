import React from 'react'
import Header from '../../components/Header/Header'
import AboutRooted from '../../components/About/AboutRooted/AboutRooted'
import AboutSecret from '../../components/About/AboutSecret/AboutSecret'

function About() {
  return (
    <div className='max-w-[1280px] m-auto pl-[50px] pr-[50px] pt-[20px]
 bg-[#EBC1AE] h-[4000px]'>
      <Header/>
      <AboutRooted/>
      <AboutSecret/>
    </div>
  )
}

export default About