import './App.css'
import { useState, useEffect } from 'react'
import OuterContainer, { InnerContainer } from './components/container.tsx'
import Navigation from './components/nav.tsx'
import Links from './components/links.tsx'
import ThemeToggle from './components/toggle.tsx'
import { HomeL, HomeR } from './components/home.tsx'
import { EducationL, EducationR } from './components/education.tsx'
import { ExperienceL, ExperienceR } from './components/experience.tsx'
import { ProjectsL, ProjectsR } from './components/projects.tsx'
import { ExtracurricularsL, ExtracurricularsR } from './components/extracurriculars.tsx'
import { SkillsL, SkillsR } from './components/skills.tsx'
import ScrollBar, { ScrollAnimation } from './utils/scroll.tsx'

function App() {
  const [dark, setTheme ] = useState<boolean>(false)
  const [view, setView] = useState<string>('Home')
  
  // const toggleView = (s: string) => setView(s)
  const toggleDark = () => setTheme(prev => !prev)

  return (
    <main id="main" className={`h-screen overflow-scroll no-scrollbar text-xl transition-colors duration-500 dark:bg-darker-blue
       dark:text-white bg-off-white text-black ${dark && 'dark'}`}>
      <ScrollBar setView={setView}/>
      <Navigation view={view} setView={setView}>
        <ThemeToggle dark={dark} toggle={toggleDark}/>
      </Navigation>
      <OuterContainer>
        <>
          <InnerContainer id="Home" Left={<HomeL />} Right={<HomeR />} />
          <InnerContainer id="Education" Left={<EducationL />} Right={<EducationR />} />
          <InnerContainer id="Experience" Left={<ExperienceL />} Right={<ExperienceR />} />
          <InnerContainer id="Projects" Left={<ProjectsL />} Right={<ProjectsR />} />
          <InnerContainer id="Extracurriculars" Left={<ExtracurricularsL />} Right={<ExtracurricularsR />} />
          <InnerContainer id="Skills" Left={<SkillsL />} Right={<SkillsR />} />
        </>
      </OuterContainer>
      <Links />
    </main>
  )
}

export default App
