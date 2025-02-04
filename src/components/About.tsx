import  Box  from "@mui/material/Box";
import girl from "../assets/girl.jpg"
const About = () => {
  return (
    <Box>
        <img src={girl} alt="profile-picture" height={100} width={100} style={{height: "100%", width: "100%"}} />
    </Box>
  )
}

export default About