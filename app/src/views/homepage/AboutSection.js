import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import AboutSVG from './AboutUs.svg';

const AboutSection = () => {
  return (
    <Grid
      container
      sx={{
        flexGrow: 1,
        gridTemplateColumns: '30% 70%',
        py: '5%',
        px: '3%',
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'//full viewport height
      }}
      id="about"
    >
      <Grid
        item
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img src={AboutSVG} alt="Imagem SVG" style={{ width: 500, height: 500 }} />
      </Grid>

      <Grid
        item
        md={6}
        sx={{
          textAlign: 'justify',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h1" gutterBottom sx={{pb:'3%'}}>
          Sobre Nós
        </Typography>
        <Typography variant="body2" paragraph sx={{ wordBreak: 'break-word'}}>
          Você já se perguntou como as criptomoedas e a tecnologia blockchain podem mudar o mundo financeiro?
          Se você é jovem e curioso sobre esse assunto, estamos aqui para ajudar!
        </Typography>
        <Typography variant="body2" paragraph sx={{ wordBreak: 'break-word'}}>
          Nosso objetivo é ajudar as pessoas a entenderem melhor o mercado de criptomoedas e tomar decisões de investimento informadas, fornecendo educação financeira específica para essas tecnologias disruptivas.
          Não se preocupe se você não tem conhecimento prévio sobre criptomoedas.
          Nossa plataforma possui recursos e informações para pessoas como você, que desejam entender e aproveitar ao máximo esse novo mundo financeiro.
        </Typography>
        <Typography variant="body2" paragraph>
          Junte-se a nós e comece a sua jornada para a liberdade financeira!
        </Typography>
        <Button variant="contained" component={Link} to="/cadastro" sx={{mt:'3%'}}>
          Inscreva-se
        </Button>
=======
import AboutSVG from './AboutUs.svg'

const AboutSection = () => {

  return (
    <Grid container sx={{ flexGrow: 1, gridTemplateColumns:'30% 70%', py: '5%', px:'3%', width:'100%', textAlign: 'center', justifyContent:'center', alignItems:'center' }} id="about" >
      <Grid item md={6}>
        <img  src={ AboutSVG } alt="Imagem SVG" style={{ width: 300, height: 300 }} />
      </Grid>
    
      <Grid item md={6}  sx={{textAlign: 'justify'}}>
        <Typography variant="h1" gutterBottom>
          Sobre Nós
        </Typography>
        <Typography variant="h5" paragraph sx={{ wordBreak: "break-word" }}>
        Você já se perguntou como as criptomoedas e a tecnologia blockchain podem mudar o mundo financeiro? 
        Se você é jovem e curioso sobre esse assunto, estamos aqui para ajudar! 
        </Typography>
        <Typography variant="h5" paragraph sx={{ wordBreak: "break-word" }}>
        Nosso objetivo é ajudar as pessoas a entenderem melhor o mercado de criptomoedas e tomar decisões de investimento informadas, fornecendo educação financeira específica para essas tecnologias disruptivas. 
        Não se preocupe se você não tem conhecimento prévio sobre criptomoedas. 
        Nossa plataforma possui recursos e informações para pessoas como você, que desejam entender e aproveitar ao máximo esse novo mundo financeiro. 
        </Typography>
        <Typography variant="h5" paragraph>
        Junte-se a nós e comece a sua jornada para a liberdade financeira!
        </Typography>
        <Button variant='contained' component={Link} to="/cadastro">Inscreva-se</Button>
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
      </Grid>
    </Grid>
  );
};

export default AboutSection;
