import { useContext, useEffect, useState } from "react"
// import { products } from "../../../../utils/productsMock"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../../context/CartContext"

import Swal from 'sweetalert2'
import { db } from "../../../../firebaseConfig"
import { getDoc, collection, doc } from 'firebase/firestore'
 

export const ItemDetailContainer = () => {

  const [productSelected, setProductSelected] = useState({})

  const {id} = useParams();

 const {addToCart, getQuantityById} = useContext(CartContext)

  let totalQuantity = getQuantityById(id)
  // console.log({totalQuantity})

  

  useEffect(()=> {

    let itemCollection = collection(db, 'products')

    let refDoc = doc(itemCollection, id)

    getDoc(refDoc).then((res)=> {
      setProductSelected( {id: res.id, ...res.data() })
    })
    

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

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    })

  }

  return <ItemDetail productSelected = {productSelected} onAdd = {onAdd} initial = {totalQuantity}/>
}
