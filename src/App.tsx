import { useState } from 'react'
import './App.css'
import OuterContainer from './components/container'

function App() {

  return (
    <main className='h-screen overflow-scroll no-scrollbar bg-radial from-dark-blue/85 to-dark-blue'>
      <OuterContainer>
        <p>HI</p>
      </OuterContainer>
    </main>
  )
}

export default App
