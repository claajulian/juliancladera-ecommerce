import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';

import Swal from 'sweetalert2'

export const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: 'Seguro quieres limpiar el carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si, eliminar',
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Carrito eliminado', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('El carrito no se eliminará', '', 'warning')
      }
    })
  }

  return (
    <div>
      <h1>Estoy en el carrito</h1>

      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2> {product.title} </h2>
            <h2> Cantidad: {product.quantity} </h2>
            <h3> U$D: {product.price} </h3>
            <h3> Envío Gratis </h3>
            <Button onClick={() => deleteProductById(product.id)}>
              Eliminar
            </Button>
          </div>
        );
      })}

      { cart.length > 0 && (
        <div>
          <h2>El total a pagar es: U$S {total}</h2>

          <Link to="/checkout">
            <Button variant="contained">Finalizar Compra</Button>
          </Link>
          <Button variant="contained" onClick={clearCartWithAlert}>
            Vaciar Carrito
          </Button>
        </div>
      )}
    </div>
  );
};
