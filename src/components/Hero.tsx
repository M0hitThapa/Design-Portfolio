
import  Typography  from "@mui/material/Typography";
import  Box  from "@mui/material/Box"
import Solutions from "./Solutions";
const Hero = () => {
  return (
    <Box>
 <Box sx={{textAlign:"center", margin:"4.125rem 0"}}>
        <Typography variant="h1" >
            Design Solution made Easy
        </Typography>
        <Typography variant="body1" >With over ten years of experience in various design disciplines,
            I'm your one-stop shop for your design needs.
        </Typography>
        
    </Box>
    <Solutions />
    </Box>
   
  )
}

export default Hero