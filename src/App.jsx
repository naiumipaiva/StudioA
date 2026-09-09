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

import './index.css'

function App() {
  return (
    <>
      <div className="bg-branco">
        <Navbar />

        <main>
          <section id="Home">
            <Hero />
          </section>

          <section id="Key">
            <Key />
          </section>

          <section id="Reviews">
            <Reviews />
          </section>

          <section id="FAQ">
            <FAQ />
          </section>

          <section id="Gallery">
            <Gallery />
          </section>

          <section id="Location">
            <Location />
          </section>

          <section id="Contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
