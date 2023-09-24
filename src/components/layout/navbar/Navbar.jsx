import { CartWidget } from '../../common/cartwidget/CartWidget'
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
        <h1>ROMA DOMA</h1>

        <nav>
            <ul className="navbar">
                <li>Inicio</li>
                <li>Cuadros</li>
                <li>Esculturas</li>

            
            <CartWidget/>
            </ul>
        </nav>
    </>
  )
}