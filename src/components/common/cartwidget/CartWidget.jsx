import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
  return (
    <>
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </>
  );
};
