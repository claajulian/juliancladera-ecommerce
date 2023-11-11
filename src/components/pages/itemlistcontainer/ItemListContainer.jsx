import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { ProductCard } from "../../common/productcard/ProductCard";
import { useParams } from "react-router-dom";
import { products } from "../../../utils/productsMock";

import HashLoader from "react-spinners/HashLoader";
import { getDocs, collection, query, where, addDoc } from 'firebase/firestore'
import { db } from "../../../firebaseConfig";


export const ItemListContainer = () => {


  const [items,setItems] = useState([])

  const {categoryName} = useParams();
  // console.log(categoryName ? 'estoy intentando filtrar' : 'estoy en el home '

  // const rellenarDB = () => {

  //   const prodCollection = collection(db, 'products')

  //   products.forEach((elemento)=>{
  //     addDoc(prodCollection, elemento)
  //   })
  // }
  

  useEffect(()=> {

    let productCollection = collection(db,'products')

    let consulta = undefined

    if (!categoryName) {
      // SI NO EXISTE CATEGORYNAME -> TODOS MIS PRODUCTOS
      consulta = productCollection
      

    } else {
      // SI EXISTE CATEGORYNAME -> PARTE DE MIS PRODUCTOS
      consulta = query(productCollection,where('category','==',categoryName))

    }

    getDocs(consulta).then(res => {
      let newArray = res.docs.map(product => {
        return {...product.data(), id: product.id}
      })

      // let arrayFiltrado = newArray.filter((elemento)=> elemento.stock > 0 )

      setItems(newArray)
    })

 
    }, [categoryName])

    // console.log(items);


    // TECNINAS DE RENDERING

    // IF CON RETURN TEMPRANO
    // if(items.length === 0) {
    //   return <h1>Cargando...</h1>
    // }


  return (
   <>
      {/* <Button variant="contained" onClick={rellenarDB}>Rellenar</Button> */}
      { /* 2DA TECNICA DE RENDERING TERNARIO ?*/ } 



      {
        items.length === 0 ?  

        <HashLoader style={{display: 'flex', justifyContent: 'center', gap: '30px'}}  /> 

        : <section style={{display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '35px'}}> 

        
        {
          items.map((item)=> {

            return <ProductCard key={item.id} item= {item}/>
          })
        }

        

      </section>

        
      }


      <Typography variant="h4" padding={2}> </Typography>


    </>
  );
};
