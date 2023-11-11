import { Outlet } from "react-router-dom"


export const Footer = () => {
  return (
    <>
    
    <Outlet/>

      <div style={{width:'100%', height:'100px', backgroundColor:'brown'}}>
      <h4 style={{color:'white'}}>Este es un footer</h4>
      
    </div>

    </>
  )
}
