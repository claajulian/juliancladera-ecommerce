import { ThemeProvider } from "@mui/material";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";
import { customTheme } from "./utils/themeConfig";
import { ItemDetailContainer } from "./components/pages/home/itemdetailcontainer/ItemDetailContainer";

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme} >

        <Navbar />
        <ItemListContainer greeting="Im greeting" />
        <ItemDetailContainer/>
        
        
      </ThemeProvider>
    </>
  );
}

export default App;
