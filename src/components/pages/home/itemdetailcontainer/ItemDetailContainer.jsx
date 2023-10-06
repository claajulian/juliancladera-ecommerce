import { useEffect, useState } from "react";
import { products } from "../../../../utils/productsMock";

export const ItemDetailContainer = () => {
  let id = 3;

  const [productSelected, setProductSelected] = useState({});

  useEffect(() => {
    const producto = products.find((product) => product.id === id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
      reject("Error ");
    });
    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(productSelected);

  return <></>;
};
