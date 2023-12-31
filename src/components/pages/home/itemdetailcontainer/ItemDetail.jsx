import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Counter } from "../../../common/counter/Counter"
import { Link } from "react-router-dom"



export const ItemDetail = ({productSelected, onAdd, initial}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', padding:'50px'}}>

            {/* {aca el detalle del producto} */}

            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={productSelected.img}
          alt="imagen-producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productSelected.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productSelected.description}
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
           U$S {productSelected.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    {/* {

      initial && <h4>Ya tienes {initial} unidades</h4>  
    } */}
    

            {/* aca el contador */}
            <Counter stock={productSelected.stock} onAdd = {onAdd} initial={initial}/>

            {/* <Button component = {Link} to='/cart' variant="contained">Terminar compra</Button> */}
            
    </div>
  )
}
