import { AppBar, Box, Toolbar, Typography,  } from '@mui/material'
import { CartWidget } from '../../common/cartwidget/CartWidget'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'



export const Navbar = () => {

let style = {
  height: '50px',
  margin: '15px'
}

  return (
    <>
    
    
<Box sx={{ flexGrow: 6}}  >
      <AppBar position="static" >
        <Toolbar>
          <Link to='/'>
          <img src="/flor.png" alt="" style={style} />
          </Link>
          <Typography className='typography' variant="h6" component={Link} to='/' sx={{ flexGrow: 1, textDecoration: 'none' }} color={'black'} >
            ROMA DOMA
          </Typography>
          <Typography className='typography' variant="h6" component={Link} to='/' sx={{ flexGrow: 1, textDecoration: 'none' }} color={'black'}>
            Inicio
          </Typography>
          <Typography className='typography' variant="h6" component={Link} to='/category/Cuadros'  sx={{ flexGrow: 1, textDecoration: 'none' }} color={'black'}>
            Cuadros
          </Typography>
          <Typography className='typography'  variant="h6" component={Link} to='/category/Esculturas' sx={{ flexGrow: 1, textDecoration: 'none' }} color={'black'}>
            Esculturas
          </Typography>
          <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>

          <Outlet/>
          
    </>
  )
}