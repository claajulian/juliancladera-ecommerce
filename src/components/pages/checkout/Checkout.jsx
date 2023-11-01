import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";


export const Checkout = () => {
  // const [nombre, setNombre] = useState('')
  // const [apellido, setApellido] = useState('')
  // const [email,setEmail] = useState('')

  // const capturarNombre = (e) => {
  //   setUserInfo( {...userInfo, nombre: e.target.value} )
  //   // setNombre(e.target.nombre)
  // }

  // const capturarApellido = (e) => {
  //   setUserInfo( {...userInfo, apellido: e.target.value} )
  //   // setApellido(e.target.value)
  // }

  // const capturarEmail = (e) => {
  //   setUserInfo( {...userInfo, email: e.target.value} )
  //   // setEmail(e.target.value)
  // }

  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart} = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (e) => {
    console.log(e.target.name);
    setUserData({ ...userData, [e.target.name]: e.target.value }); // Segun el tipo de name del input, llena el valor
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e)
    let order = {
      buyer: userData,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach(elemento => {
      let refDoc = doc(db,'products',elemento.id)
      updateDoc(refDoc,{stock:elemento.stock - elemento.quantity})
    });

    // console.log(order)
    // console.log(userData)
    clearCart()
  };

  return (
    <div>
      <h1>Estoy en el checkout</h1>
      {orderId ? (
        <div>
          <h2>Gracias por su compra, su N° de comporbante es {orderId}</h2>
          <Link to='/'>Seguir comprando</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* <input type="text" name="nombre" onChange={  (e) => setNombre(e.target.value) } /> */}

          <input
            type="text"
            name="nombre"
            placeholder="nombre"
            onChange={handleChange}
          />
          <input
            type="text"
            name="apellido"
            placeholder="apellido"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />

          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};
