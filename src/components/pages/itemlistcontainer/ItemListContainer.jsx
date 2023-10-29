import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { ProductCard } from "../../common/productcard/ProductCard";
import { useParams } from "react-router-dom";
import { products } from "../../../utils/productsMock";

import HashLoader from "react-spinners/HashLoader";


export const ItemListContainer = () => {


  const [items,setItems] = useState([])

  const {categoryName} = useParams();
  // console.log(categoryName ? 'estoy intentando filtrar' : 'estoy en el home ')
  

  useEffect(()=> {
    const productosFiltrados = products.filter( product => product.category === categoryName)

    const task = new Promise((resolve,reject)=> {

      setTimeout(()=>{
        resolve( categoryName ? productosFiltrados : products );

      },2000)
     
  
    })
    task.then((resp)=> setItems(resp)) // Se guarda los products en items
    .catch((err)=> console.log(err))
    
    }, [categoryName])

    console.log(items);


    // TECNINAS DE RENDERING

    // IF CON RETURN TEMPRANO
    // if(items.length === 0) {
    //   return <h1>Cargando...</h1>
    // }


  return (
   <>


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
