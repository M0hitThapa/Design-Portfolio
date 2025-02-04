import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Work from "./components/Work"
import CTA from "./components/CTA"

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Work />
      <CTA />
      <Nav />
    </div>
  )
}

export default App