import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Project from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

const App = () => (
    <div className="flex flex-col h-auto w-full text-lg sm:text-2xl">
      <Header />
      <Intro />
      <About />
      <Project />
      <ContactMe />
      <Footer />
    </div>
  )

export default App
