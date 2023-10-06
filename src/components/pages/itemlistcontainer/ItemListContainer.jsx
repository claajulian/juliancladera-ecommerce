import { useEffect, useState } from "react";
import { products } from "../../../utils/productsMock";
import { Typography } from "@mui/material";
import { ProductCard } from "../../common/productcard/ProductCard";



export const ItemListContainer = ({ greeting }) => {


  const [items,setItems] = useState([])

  useEffect(()=> {
    const task = new Promise((resolve,reject)=> {

      resolve(products)
  
    })
    task.then((resp)=> setItems(resp)) // Se guarda los products en items
    .catch((err)=> console.log(err))

  },[])

    console.log(items);
  


  return (
   <>
      {/* <h2 style={{ padding: 20 }}>{greeting}</h2> */}
      <Typography variant="h4" padding={10}> {greeting} </Typography>


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
