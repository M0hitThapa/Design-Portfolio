import  Box  from "@mui/material/Box"

import SolutionBox from "./SolutionBox"
import block1 from "../assets/block1.jpg"
import block4 from "../assets/block4.jpg"
import block2 from "../assets/block2.avif"
import block3 from "../assets/block3.avif"
import block5 from "../assets/block5.avif"
import block6 from "../assets/block6.avif"
import { COLORS } from "../styles/colors"

const SECTION_HEIGHT = "44vh";
const Solutions = () => {
  return (
    <Box sx={{height: SECTION_HEIGHT, display:"flex", justifyContent:"space-between"}}>
   <SolutionBox text="Graphic Design" imageSrc={block1} imageHeight="9rem" imageWidth="9rem" color={COLORS.Blue} sx={{ flex:0.35}}/>

   <Box sx={{ height: SECTION_HEIGHT, display:"flex",flexDirection:"column", justifyContent: "space-between", flex:0.3}}>
    <Box sx={{ display: "flex", justifyContent:"space-between"}}>
    <SolutionBox text="UI/UX" imageSrc={block2} imageHeight="4rem" imageWidth="4rem" color={COLORS.Yellow} sx={{ height: "15vh", flex: 0.45}}/>
    <SolutionBox text="Apps" imageSrc={block3} imageHeight="4rem" imageWidth="4rem" color={COLORS.pink} sx={{ flex: 0.45}}/>
    </Box>
    <SolutionBox text="Illustration" imageSrc={block4} imageHeight="4rem" imageWidth="8rem"  color={COLORS.lightRed}/>
   </Box>
   <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:SECTION_HEIGHT, flex: 0.3}}>
   <SolutionBox text="Photography" imageSrc={block5} imageHeight="4rem" imageWidth="5rem"   color={COLORS.cyan} sx={{ height: "15vh"}}/>
   <SolutionBox text="Motion Graphics" imageSrc={block6} imageHeight="4rem" imageWidth="6rem"  color={COLORS.purple}/>
   </Box>
    </Box>
  )
}

export default Solutions