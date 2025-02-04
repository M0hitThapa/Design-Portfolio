
import  Button from "@mui/material/Button"
import { COLORS } from "../styles/colors"

interface CustomButtonProps {
    color?: string
}
const CustomButton = ({ color }: CustomButtonProps) => {
  return <Button sx={{backgroundColor: color === "black" ? COLORS.black :COLORS.lightRed,
    borderRadius:"1.75rem",
    padding:"0.5rem 1.5rem",
    fontWeight: 600,
    color:COLORS.lightCream,
    textTransform:"none",
    maxWidth: "14.25rem",
    maxHeight:"3rem",
  }}>
    Free Consultation
  </Button>
    
  
}

export default CustomButton