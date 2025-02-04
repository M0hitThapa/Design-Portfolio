
import Container  from "@mui/material/Container"
import Nav  from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"


const page = () => {
  return (
<Container maxWidth="lg">
  <Nav />
  <Hero />
  <About />
</Container>
  )
}

export default page