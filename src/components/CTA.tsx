import  Box  from "@mui/material/Box"
import { COLORS } from "../styles/colors"
import  Typography  from "@mui/material/Typography"
import CustomButton from "./CustomButton"

const CTA = () => {
  return <Box sx={{ height:"8rem", backgroundColor:COLORS.black, borderRadius:"0.5rem",
    display:"flex",
    padding:"5rem 4rem",
    justifyContent:"space-between",
    alignItems:"center",
    margin:"4rem 0",
  }}>
    <Box sx={{ display:"flex", flexDirection:"column"}}>
        <Typography variant="h2" sx={{ color:COLORS.lightCream}}>Book a call with me</Typography>
        <Typography variant="body1" sx={{ color:COLORS.lightCream}}>I'd love to have a chat to see how I can help you.
            The best first step is for us to discuss your peoject during a free consultation. Then we can move forward from there.
        </Typography>
    </Box>
    <CustomButton />
  </Box>
    
  
}

export default CTA