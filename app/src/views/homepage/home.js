import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, AppBar, Toolbar, Box, Grid } from '@mui/material';
import Logo from 'ui-component/Logo';
import blockchain from 'assets/images/home/blockchain.jpg';

const LandingPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ height: 70, backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Logo />
          <Box>
            <Button variant="contained" component={Link} to="/login" sx={{ m: 2 }}>
              Entrar
            </Button>
            <Button variant="contained" component={Link} to="/cadastro">
              Cadastre-se
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,eos,ethereum,ripple,tether,binancecoin,solana,dogecoin,shiba-inu"
        currency="brl"
        background-color="#ffffff"
        locale="pt"
      ></coingecko-coin-price-marquee-widget>

      {/* Two-column layout with Grid */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6}>
          <img src={blockchain} alt="blockchain" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              textAlign: 'center',
              color: '#fff',
              zIndex: 1,
            }}
          >
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" align="center" gutterBottom>
            Faça parte da revolução financeira
          </Typography>
          <Typography variant='h4' align="center">
            Conheça o ecossistema cripto.
            </Typography>
          <Typography variant="subtitle1" align="center" paragraph>
             Aprenda, explore e atualize-se!
          </Typography>
          <Button variant="contained" color="primary" align="center" size="large" component={Link} to="/login">
            Começar
          </Button>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default LandingPage;
