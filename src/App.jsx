import { ThemeProvider } from "@mui/material";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";
import { customTheme } from "./utils/themeConfig";

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme} >

        <Navbar />
        <ItemListContainer greeting="Im greeting" />
        
        
      </ThemeProvider>
    </>
  );
}

export default App;
