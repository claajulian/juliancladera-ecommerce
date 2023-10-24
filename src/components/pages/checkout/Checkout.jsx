import { useState } from "react"


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


        
  const [userInfo,setUserInfo] = useState({
     nombre: '',
     apellido: '',
     email: ''
    })


  const capturarDatos = (e) => {
    console.log(e.target.name)
    setUserInfo( {...userInfo, [e.target.name]: e.target.value} ) // Segun el tipo de name del input, llena el valor
  } 
  
  const enviarFormulario = (e) => {
    e.preventDefault()
    console.log(e)

    
    console.log(userInfo)

    
  }

  return (
    <div>
        <h1>Estoy en el checkout</h1>

        <form onSubmit={enviarFormulario} >

          {/* <input type="text" name="nombre" onChange={  (e) => setNombre(e.target.value) } /> */}

          <input type="text" name="nombre" placeholder="nombre" onChange={ capturarDatos } />          
          <input type="text" name="apellido" placeholder="apellido" onChange={ capturarDatos } />
          <input type="text" name="email" placeholder= 'email' onChange={ capturarDatos } />

          <button type="submit">Enviar</button>
          
        </form>

        
    </div>
  )
}
