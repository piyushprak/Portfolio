'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import FloatingElements from '../components/FloatingElements'


export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-950 overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <Header />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}