import React from 'react'
import { Hero } from '../Hero/Hero'
import { Banner } from '../Banner/Banner'
import { Skills } from '../Skills/Skills'
import { AboutMe } from '../AboutMe/AboutMe'

function Home() {
  return (
    <>
    <Banner/>
    <Hero/>
    <Skills/>
    {/* <TimelineDemo/> */}
    <AboutMe/>
    
    
    </>
  )
}

export default Home