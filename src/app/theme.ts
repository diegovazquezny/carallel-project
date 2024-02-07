"use client";

import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: green,
    secondary: {
      main: "#FFF",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
