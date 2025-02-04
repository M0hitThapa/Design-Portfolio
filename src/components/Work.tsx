import  Box  from "@mui/material/Box"
import  Typography  from "@mui/material/Typography"
import work1 from "../assets/work1.jpeg"
import work2 from "../assets/work2.jpeg"
import work3 from "../assets/work3.jpeg"

const Work = () => {
  return (
   <Box>
    <Typography variant="h3" sx={{textAlign:"center"}}>My Work</Typography>
    <Box sx={{ display:"flex",  justifyContent:"space-between"}}>
        <img src={work1} alt="work" height={100} width={100} style={{ height: "50vh", width: "20vw", borderRadius:"0.5rem"}} />
        <img src={work2} alt="work" height={100} width={100} style={{ height: "50vh", width: "20vw",borderRadius:"0.5rem"}} />
        <img src={work3} alt="work" height={100} width={100} style={{ height: "50vh", width: "20vw",borderRadius:"0.5rem"}} />
    </Box>
   </Box>
  )
}

export default Work