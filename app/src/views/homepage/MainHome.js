import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, AppBar, Toolbar, Box, Grid, Divider } from '@mui/material';
import Logo from 'ui-component/Logo';
import AboutSection from './AboutSection';
import blockchain from 'assets/images/home/data.jpg';
import CardsSection from './CardsSection';
import ToolsSection from './ToolsSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <AppBar position="sticky" sx={{ height: 70, boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Logo />
          <Box>
            <Button href="#home">
              Início
            </Button>
            <Button href="#about" sx={{mx:10}}>
              Sobre
            </Button>
            <Button href="#tools">
              Ferramentas
            </Button>
          </Box>
            <Box>
              <Button variant="contained" color="secondary" component={Link} to="/login" sx={{ m: 2, color:'secondary' }}>
                Entrar
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

<Grid container id="home">
      <Grid item xs={12} style={{ position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <img src={blockchain} alt="blockchain" style={{ width:'100%', height:'99%', objectFit: 'fill' }} />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '99%',
              background: 'rgba(0, 0, 0, 0.6)', // Black with adjustable opacity
              zIndex: 2,
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 3,
            }}
          >
            <Typography variant="h2" gutterBottom color={'white'}>
              Faça parte da revolução financeira
            </Typography>
            <Typography variant="h4" color={'white'}>Conheça o ecossistema cripto.</Typography>
            <Typography variant="subtitle1" paragraph color={'white'}>
              Aprenda, explore e atualize-se!
            </Typography>
            <Button variant="contained" color="secondary" component={Link} to="/cadastro">
              Começar
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
    <Divider></Divider>
    <CardsSection></CardsSection>
    <Divider></Divider>
    <AboutSection></AboutSection>
    <Divider></Divider>
    <ToolsSection></ToolsSection>
    <Footer></Footer>
    </div>
  );
};

export default LandingPage;
