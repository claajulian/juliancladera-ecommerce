import { Typography } from "@mui/material";


export const ItemListContainer = ({ greeting }) => {
  return (

    <>
      {/* <h2 style={{ padding: 20 }}>{greeting}</h2> */}
      <Typography variant="h4" padding={10}> {greeting} </Typography>
      
      
    </>
  );
};
