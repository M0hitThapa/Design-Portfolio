import  Box  from "@mui/material/Box"
import { SxProps } from "@mui/system"

interface Props {
    sx?: SxProps;
    children: React.ReactNode;
}

const CustomBox = ({ sx, children }: Props) => {
  return (
    <Box sx={{borderRadius:"0.5rem", ...sx }}>{children}</Box>
  )
}

export default CustomBox