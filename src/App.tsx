import './App.css'
import { useState, useRef } from 'react'
import OuterContainer, { InnerContainer } from './components/container.tsx'
import Navigation from './components/nav.tsx'
import Links from './components/links.tsx'
import ThemeToggle from './components/toggle.tsx'
import Chatbot from './components/chatbot.tsx'
import { HomeL, HomeR } from './components/home.tsx'
import { EducationL, EducationR } from './components/education.tsx'
import { ExperienceL, ExperienceR } from './components/experience.tsx'
import { ProjectsL, ProjectsR } from './components/projects.tsx'
import { ExtracurricularsL, ExtracurricularsR } from './components/extracurriculars.tsx'
import { SkillsL, SkillsR } from './components/skills.tsx'
import ScrollBar from './components/scroll.tsx'

function App() {
  const locationRef = useRef<number>(0)
  const [view, setView] = useState<string>('Home')
  const [dark, setTheme] = useState<boolean>(false)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const toggleDark = () => setTheme(prev => !prev)

  return (
    <main id="main" className={`h-screen overflow-scroll no-scrollbar text-xs sm:text-base lg:text-xl transition-colors duration-500 dark:bg-darker-blue dark:text-white bg-off-white text-black ${dark && 'dark'} tracking-wide`}>
      <ScrollBar setView={setView} locationRef={locationRef}/>
      <Navigation view={view} setView={setView} locationRef={locationRef}>
        <ThemeToggle dark={dark} toggle={toggleDark} />
      </Navigation>
      <OuterContainer>
        <>
          <InnerContainer id="Home" view={view} Left={<HomeL />} Right={<HomeR />} />
          <InnerContainer id="Education" view={view} Left={<EducationL />} Right={<EducationR />} />
          <InnerContainer id="Experience" view={view} Left={<ExperienceL />} Right={<ExperienceR />} />
          <InnerContainer id="Projects" view={view} Left={<ProjectsL expandedProject={expandedProject} />} Right={<ProjectsR expandedProject={expandedProject} setExpandedProject={setExpandedProject}/>} />
          <InnerContainer id="Extracurriculars" view={view} Left={<ExtracurricularsL />} Right={<ExtracurricularsR />} />
          <InnerContainer id="Skills" view={view} Left={<SkillsL />} Right={<SkillsR />} />
        </>
      </OuterContainer>
      <Links />
      <Chatbot />
    </main>
  )
}

export default App
