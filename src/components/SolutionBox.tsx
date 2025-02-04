import { SxProps } from "@mui/material";
import CustomBox from "./CustomBox"
import Typography from "@mui/material/Typography";
import { COLORS } from "../styles/colors";
interface Props {
    text: string;
    imageSrc: string;
    color: string;
    imageHeight:string;
    imageWidth:string;
   
    sx?: SxProps;
}


const SolutionBox = ({ text, color, imageSrc,imageHeight,imageWidth, sx}: Props) => {
  return (
    <CustomBox sx={{ backgroundColor: color, padding: "1.5rem",display: "flex", flexDirection:"column", justifyContent:"space-between", ...sx}}>
        <img src={imageSrc} alt="decoorate" height={100} width={100} style={{height: imageHeight, width: imageWidth, alignSelf:"flex-end", borderRadius:"10px"}} />
        <Typography sx={{ color: COLORS.lightCream, fontSize:"1.5rem", fontWeight:"600"}}>{text}</Typography>
    </CustomBox>
  )
}

export default SolutionBox