import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { ProductCard } from "../../common/productcard/ProductCard";
import { useParams } from "react-router-dom";
import { products } from "../../../utils/productsMock";



export const ItemListContainer = () => {


  const [items,setItems] = useState([])

  const {categoryName} = useParams();
  console.log(categoryName ? 'estoy intentando filtrar' : 'estoy en el home ')
  

  useEffect(()=> {
    const productosFiltrados = products.filter( product => product.category === categoryName)

    const task = new Promise((resolve,reject)=> {

      resolve( categoryName ? productosFiltrados : products );
  
    })
    task.then((resp)=> setItems(resp)) // Se guarda los products en items
    .catch((err)=> console.log(err))
    }, [categoryName])

    console.log(items);
  


  return (
   <>
     
      <Typography variant="h4" padding={2}> </Typography>


      <section style={{display: 'flex', justifyContent: 'center', gap: '30px'}}> 
        {
          items.map((item)=> {

            return <ProductCard key={item.id} item= {item}/>
          })
        }

      </section>
    </>
  );
};
