import {} from 'react'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import Hero from './sections/main/Hero'
import Key from './sections/main/Key'
import Reviews from './sections/main/Reviews'
import FAQ from './sections/main/FAQ'
import Gallery from './sections/main/Gallery'
import Location from './sections/main/Location'
import Contact from './sections/main/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Key />
        <Reviews />
        <FAQ />
        <Gallery />
        <Location />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
