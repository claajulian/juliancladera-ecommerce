import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Counter } from "../../../common/counter/Counter"


export const ItemDetail = ({productSelected, onAdd, initial}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>

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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
           U$S {productSelected.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

            {/* aca el contador */}
            <Counter stock={productSelected.stock} onAdd = {onAdd} initial={initial}/>

            
    </div>
  )
}
