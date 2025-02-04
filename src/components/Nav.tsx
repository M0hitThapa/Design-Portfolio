
import Box from "@mui/material/Box"
import logo from "../assets/logo.png"
import CustomButton from "./CustomButton"

const Nav = () => {
  return (
    <Box sx={{ margin: "2rem 0", display: "flex", alignItems:"center", justifyContent:"space-between"}}>
       <img src={logo} alt="logo" height={64} width={64} />
       <CustomButton color="black" />
    </Box>
 
  )
}

export default Nav




