import  Box  from "@mui/material/Box";
import  Typography  from "@mui/material/Typography";
import girlpic from "../assets/girlpic.jpg"
import CustomButton from "./CustomButton";
const About = () => {
  return (
    <Box sx={{margin:"5.5rem 0", display:"flex", justifyContent:"space-evenly"}}>
        <img src={girlpic} alt="profile-picture" height={100} width={100} style={{height: "20vw", width: "20vw", borderRadius:"100%"}} />
        <Box sx={{display:"flex", flexDirection: "column", flex:0.6, justifyContent:"space-between",}}>
        <Typography variant="h2">I'm Ankita, and I'd love to work on your project</Typography>
        <Typography variant="body1">I love working with others to create beautiful design solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera! </Typography>
        <CustomButton />
        </Box>
    </Box>
  )
}

export default About