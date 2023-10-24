import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

export const Cart = () => {

  const {cart, clearCart} = useContext(CartContext)

  

  return (
    <div>
        <h1>Estoy en el carrito</h1>

       {
        cart.map((product)=> {
          return <div key={product.id}>

            <h2> {product.title} </h2>
            <h2> Cantidad: {product.quantity} </h2>

          </div>
        })
       }

        <Link to='/checkout'>
          <Button variant='contained'>Finalizar Compra</Button>
        </Link>
          <Button variant='contained' onClick={clearCart}>Vaciar Carrito</Button>
    </div>
  )
}
