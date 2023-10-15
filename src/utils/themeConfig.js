import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0074B4',
    },
    secondary: {
      main: '#3b5998',
    },
    text: {
      primary: '#000000',
      secondary: '#3b5998',
    }
  },
})