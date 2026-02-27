import './App.css'
import { useState } from 'react'
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

function App() {
  const [dark, setTheme ] = useState<boolean>(false)
  const toggleDark = () => setTheme(prev => !prev)

  return (
    <main className={`h-screen text-xl overflow-scroll no-scrollbar transition-colors duration-500 dark:bg-darker-blue
       dark:text-white bg-off-white text-black ${dark && 'dark'}`}>
      <Navigation />
      <OuterContainer>
        <>
          <InnerContainer id="Home" Left={<HomeL />} Right={<HomeR />} />
          <InnerContainer id="Education" Left={<EducationL />} Right={<EducationR />} />
          <InnerContainer id="Experience" Left={<ExperienceL />} Right={<ExperienceR />} />
          <InnerContainer id="Projects" Left={<ProjectsL />} Right={<ProjectsR />} />
          <InnerContainer id="Extracurricular" Left={<ExtracurricularsL />} Right={<ExtracurricularsR />} />
          <InnerContainer id="Skills" Left={<SkillsL />} Right={<SkillsR />} />
        </>
      </OuterContainer>
      <Links />
      <ThemeToggle dark={dark} toggle={toggleDark}/>
    </main>
  )
}

export default App
