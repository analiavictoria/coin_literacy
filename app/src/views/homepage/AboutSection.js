import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
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
      </Grid>
    </Grid>
  );
};

export default AboutSection;
