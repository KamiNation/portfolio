"use client"



import React, { useState } from 'react'

import Heading from './utils/Heading'


import Header from './components/Header'
import Portfolio from './components/Portfolio/Portfolio'




const page = () => {



  return (
    <div>
      <Heading
        title="Israel Adedamola Portfolio"
        description="Portfolio + Multi-Platform"
        keywords="Technical-Writer, MERN-Stack, React-Native, NextJS, Typescript, Redux, Axios, E-commerce, RTKQuery, React, Israel, Adedamola, Adebayo, Kami, Community, Blog, LinkedIn, Gmail, X, Talent"
      />
      <Header/>
      <Portfolio/>
    </div>
  )
}

export default page