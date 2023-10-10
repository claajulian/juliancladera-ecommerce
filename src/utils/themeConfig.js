import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    text: {
      primary: 'rgba(241,11,120,0.87)',
      secondary: 'rgba(125,36,17,0.6)',
    },
    button: {
      secondary: '#2e7d32'
    }
  },
})