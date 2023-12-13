import React from 'react'
import {
    AppBar,
    Toolbar,
    Button
} from '@mui/material';
import Logo from 'ui-component/Logo';
import {Link} from 'react-router-dom';

const Navbar = () => {
    
    return (
       
       <AppBar component="nav"  position="sticky" sx={{ height: 70, width:'100%', boxShadow: 'none' }}>
        <Toolbar
          sx={{
            display: 'flex',
            flexWrap:'wrap',
            justifyContent: 'space-between',
            flexDirection: ['column', 'row', 'row', 'row'],
            alignItems: 'center',
            alignContent:'center'
          }}
        >
            <Logo />
            <Button href="#home" sx={{ mb: [1, 0, 0, 0] }}>
              Início
            </Button>
            <Button href="#about" sx={{ mb: [1, 0, 0, 0], mx: [0, 2, 2, 2] }}>
              Sobre
            </Button>
            <Button href="#tools" sx={{ mb: [1, 0, 0, 0] }}>
              Ferramentas
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/login"
              sx={{ m: [1, 2, 2, 2], color: 'secondary' }}
            >
              Entrar
            </Button>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar;