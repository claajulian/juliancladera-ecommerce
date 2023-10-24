import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {

  const {cart} = useContext(CartContext)  // Recibe el estado cart 
 

  return (
    <>
      <Link to='/cart'>

      <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon color="" />
      </Badge>

      </Link>

    </>
  );
};
