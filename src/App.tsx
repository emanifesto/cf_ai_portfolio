import { useState } from 'react'
import './App.css'
import OuterContainer, {InnerContainer} from './components/container.tsx'
import Navigation from './components/nav.tsx'
import Links from './components/links.tsx'
import {HomeL, HomeR} from './components/home.tsx'
import { EducationL, EducationR } from './components/education.tsx'

function App() {

  return (
    <main className='h-screen text-xl overflow-scroll no-scrollbar bg-radial from-dark-blue/85 to-dark-blue'>
      <Navigation />
      <OuterContainer >
        <>
        <InnerContainer id="Home" Left={HomeL()} Right={HomeR()}/>
        <InnerContainer id="Education" Left={EducationL()} Right={EducationR()}/>
        </>
      </OuterContainer>
      <Links />
    </main>
  )
}

export default App
