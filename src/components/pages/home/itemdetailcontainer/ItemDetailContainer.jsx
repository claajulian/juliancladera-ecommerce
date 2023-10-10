import { useEffect, useState } from "react"
import { products } from "../../../../utils/productsMock"
import { ItemDetail } from "./ItemDetail"



export const ItemDetailContainer = () => {

  const [productSelected, setProductSelected] = useState({})

  let id = 3

  useEffect(()=> {

    let productos = products.find((product)=> product.id === id )

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
  let obj = {
      ...productSelected, 
      quantity: cantidad
    }
  console.log('Este es el producto que se agrega', obj)

  }

  return <ItemDetail productSelected = {productSelected} onAdd = {onAdd}/>
}
