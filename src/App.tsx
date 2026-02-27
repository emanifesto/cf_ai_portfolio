import './App.css'
import { ThemeProvider, useTheme } from './utils/ThemeContext.tsx'
import OuterContainer, { InnerContainer } from './components/container.tsx'
import Navigation from './components/nav.tsx'
import Links from './components/links.tsx'
import ThemeToggle from './components/ThemeToggle.tsx'
import { HomeL, HomeR } from './components/home.tsx'
import { EducationL, EducationR } from './components/education.tsx'
import { ExperienceL, ExperienceR } from './components/experience.tsx'
import { ProjectsL, ProjectsR } from './components/projects.tsx'
import { ExtracurricularsL, ExtracurricularsR } from './components/extracurriculars.tsx'
import { SkillsL, SkillsR } from './components/skills.tsx'

function AppContent() {
  const { isDark } = useTheme()

  return (
    <main className={`h-screen text-xl overflow-scroll no-scrollbar transition-colors duration-500 ${isDark
      ? 'bg-linear-to-b from-darker-blue to-dark-blue text-white'
      : 'bg-off-white text-black'
      }`}>
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
      <ThemeToggle />
    </main>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
