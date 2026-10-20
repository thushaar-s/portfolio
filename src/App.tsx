import About from './components/About'
import Contact from './components/Contact'
import Credentials from './components/Credentials'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Interests from './components/Interests'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Work from './components/Work'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only z-[80] rounded-full bg-fg px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Credentials />
        <Interests />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
