
import Container  from "@mui/material/Container"
import Nav  from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Work from "./components/Work"
import CTA from "./components/CTA"


const page = () => {
  return (
<Container maxWidth="lg">
  <Nav />
  <Hero />
  <About />
  <Work />
  <CTA />
  <Nav />
</Container>
  )
}

export default page