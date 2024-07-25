import React from 'react'
import {
<<<<<<< HEAD
  AppBar,
  Toolbar,
  Button
} from '@mui/material';
import Logo from 'ui-component/Logo';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Componente reutilizável
const NavButton = ({ href, children, isLink, to, variant = 'text', color = 'primary', sx }) => {
  return isLink ? (
    <Button
      variant={variant}
      color={color}
      component={Link}
      to={to}
      sx={{ color: color, fontSize: 16, ...sx }}
    >
      {children}
    </Button>
  ) : (
    <Button href={href} sx={{ fontSize: 18, ...sx }}>
      {children}
    </Button>
  );
};

// Definição de prop types para validação
NavButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLink: PropTypes.bool,
  to: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  sx: PropTypes.object
};


const Navbar = () => {
  return (
    <AppBar component="nav" position="sticky" sx={{ height: 70, width: '100%', boxShadow: 'none' }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          flexDirection: ['column', 'row', 'row', 'row'],
          alignItems: 'center',
          alignContent: 'center'
        }}
      >
        <Logo />
        <NavButton href="#home" sx={{ mb: [1, 0, 0, 0] }}>
          Início
        </NavButton>
        <NavButton href="#about" sx={{ mb: [1, 0, 0, 0], mx: [0, 2, 2, 2] }}>
          Sobre
        </NavButton>
        <NavButton href="#tools" sx={{ mb: [1, 0, 0, 0] }}>
          Ferramentas
        </NavButton>
        <NavButton isLink={true} to="/login" variant="contained" color="secondary">
          Entrar
        </NavButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
=======
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
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
