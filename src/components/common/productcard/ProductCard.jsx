import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export const ProductCard = ({ item }) => {
  return (
    <>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={item.img}
        title="imagen"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'center'}}>
        <Button size="small" variant="contained">VER DETALLE</Button>
      </CardActions>
    </Card>


    
    </>
  );
};


  {/* <img src={item.img} alt="imagen" />
      <h1> {item.title} </h1>
      <h2> {item.price} </h2> */}