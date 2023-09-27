import { AppBar, Box, IconButton, Toolbar, Typography,  } from '@mui/material'
import { CartWidget } from '../../common/cartwidget/CartWidget'
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'

export const Navbar = () => {
  return (
    <>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className='typography' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ROMA DOMA
          </Typography>
          <Typography className='typography' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cuadros
          </Typography>
          <Typography className='typography'  variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Esculturas
          </Typography>
          <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>

    </>
  )
}