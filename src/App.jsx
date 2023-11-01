import { ThemeProvider } from "@mui/material";
import { customTheme } from "./utils/themeConfig";

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/home/itemdetailcontainer/ItemDetailContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Cart } from "./components/pages/cart/Cart";
import { Checkout } from "./components/pages/checkout/Checkout";
import { CartContextComponent } from "./context/CartContext";




function App() {
  return (
    <>
   <ThemeProvider theme={customTheme} >

    <BrowserRouter>

    <CartContextComponent>

   
    
    <Routes>


    <Route element= {<Navbar/>}>

    <Route path="/" element= {<ItemListContainer/>} />
    <Route path="/category/:categoryName" element= {<ItemListContainer/>} />
    <Route path="/cart" element= {<Cart/>} />
    <Route path="/itemDetail/:id" element= {<ItemDetailContainer/>} />
    <Route path="/checkout" element = {<Checkout/>}/>

    </Route>


    <Route path='*' element= { <h1>Not found</h1>} />     {/* Si hay alguna ruta que no existe muestra ese mensaje */}


    </Routes>

    </CartContextComponent>

    </BrowserRouter>

    </ThemeProvider>

    </>
  );
}

export default App;
