import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextComponent = ( {children} ) => {

  const [cart,setCart] = useState([])

  const addToCart = (product) => {

   let exist = isInCart(product.id)
    if(exist) {
      let newArr = cart.map((elemento)=> {
        if(elemento.id === product.id) {
          return {...elemento, quantity: product.quantity}
        } else {
          return elemento
        }
      })
      setCart(newArr)

   } else {
    setCart( [...cart, product] )
   }
  }


  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id ) // DEVUELVE UN TRUE O FALSE
    return exist
  }

  const getQuantityById = (id) => {
    let product = cart.find(elemento => elemento.id === id)
    return product?.quantity
  }

  const clearCart = () => {
    setCart([])
  }


  let data = { cart, addToCart, getQuantityById, clearCart } // Van las cosas que quiero proveer a los hijos.
  
  return (

    <CartContext.Provider value={data}>  
      
    {children}

    </CartContext.Provider>
  )
}
 