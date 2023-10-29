import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {

  const { getTotalQuantity } = useContext(CartContext)  // Recibe el estado cart 
 
  let total = getTotalQuantity()

  return (
    <>
      <Link to='/cart'>

      <Badge badgeContent={total} color="secondary">
        <ShoppingCartIcon color="" />
      </Badge>

      </Link>

    </>
  );
};
