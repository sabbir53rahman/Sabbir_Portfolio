import React from 'react'
import { Hero } from '../Hero/Hero'
import { Banner } from '../Banner/Banner'
import { Skills } from '../Skills/Skills'
import { AboutMe } from '../AboutMe/AboutMe'
import ContactUs from '../ContactUs/ContactUs'

function Home() {
  return (
    <>
    <Banner/>
    <AboutMe/>
    <Skills/>
    <Hero/>
    <ContactUs/>
    
    
    </>
  )
}

export default Home