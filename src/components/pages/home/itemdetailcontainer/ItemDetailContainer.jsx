import { useContext, useEffect, useState } from "react"
import { products } from "../../../../utils/productsMock"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../../context/CartContext"


export const ItemDetailContainer = () => {

  const [productSelected, setProductSelected] = useState({})

  const {id} = useParams();

 const {addToCart, getQuantityById} = useContext(CartContext)

  let totalQuantity = getQuantityById(+id)
  // console.log({totalQuantity})

  

  useEffect(()=> {

    let productos = products.find((product) => product.id === +id )

    const getProduct = new Promise((resolve,reject)=> {
      resolve(productos)
      reject('error')
    })
    getProduct.then((res)=> setProductSelected(res)).catch((err)=> console.log(err))

  }, [id])

  // console.log(productSelected);

  const onAdd = (cantidad) => {
    // console.log('Se agregó al carrito', productSelected);
    // console.log(cantidad);
  let item = {
      ...productSelected, 
      quantity: cantidad 
    }

  // console.log('Este es el producto que se agrega', item)

    addToCart( item )

  }

  return <ItemDetail productSelected = {productSelected} onAdd = {onAdd} initial = {totalQuantity}/>
}
