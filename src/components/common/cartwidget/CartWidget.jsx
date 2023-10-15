import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
  return (
    <>
      <Link to='/cart'>

      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon color="" />
      </Badge>

      </Link>

    </>
  );
};
