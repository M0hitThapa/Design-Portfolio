"use client";
import { createTheme } from "@mui/material";
import { COLORS } from "./colors";


const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      color:COLORS.black,
      marginBottom:"1.5rem",
      lineHeight: 2,
    },
    h2: {
        fontSize: "2rem",
        fontWeight: 600,
        color:COLORS.black,
        lineHeight: 2,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
        color:COLORS.black,
        lineHeight: 2,
      },
      body1: {
        fontSize: "1.125rem",
        color:COLORS.mediumBrown,
      }
  },
});

export default theme;