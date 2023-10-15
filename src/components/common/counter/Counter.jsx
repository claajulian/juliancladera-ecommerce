import { Button } from "@mui/material";
import { useState } from "react";

export const Counter = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  const Sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("Cantidad maxima");
    }
  };

  const Restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div style={{marginRight: '5px', padding: '10px'}}>

      <Button onClick={Sumar} variant="contained">+</Button>
      <h1>{counter}</h1>  
      <Button onClick={Restar} variant="contained">-</Button>
      <br />
      <Button onClick={()=> onAdd(counter)} variant="outlined" size="small" sx={{margin:'10px'}}>Agregar al carrito</Button>

      </div>
    </>
  );
};
