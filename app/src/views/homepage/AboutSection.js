import React from 'react';
import { Typography, Grid } from '@mui/material';
import AboutSVG from './AboutUs.svg'

const AboutSection = () => {

  return (
    <Grid container sx={{ flexGrow: 1, py: '5%', width:'95%' }} id="about" >
      <Grid item md={6} sx={{textAlign: 'center'}}>
        <img  src={ AboutSVG } alt="Imagem SVG" style={{ width: 300, height: 300 }} />
      </Grid>
    
      <Grid item md={6}  sx={{textAlign: 'center'}}>
        <Typography variant="h1" gutterBottom>
          Sobre Nós
        </Typography>
        <Typography variant="h5" paragraph sx={{ wordBreak: "break-word" }}>
        Você já se perguntou como as criptomoedas e a tecnologia blockchain podem mudar o mundo financeiro? 
        Se você é jovem e curioso sobre esse assunto, estamos aqui para ajudar! 
        Nosso objetivo é ajudar as pessoas a entenderem melhor o mercado de criptomoedas e tomar decisões de investimento informadas, fornecendo educação financeira específica para essas tecnologias disruptivas. 
        Não se preocupe se você não tem conhecimento prévio sobre criptomoedas. 
        Nossa plataforma possui recursos e informações para pessoas como você, que desejam entender e aproveitar ao máximo esse novo mundo financeiro. Através do nosso blog, fórum e calculadora conversora de criptomoedas, queremos capacitar nossa comunidade a alcançar a liberdade financeira. Aprenda sobre os conceitos básicos das criptomoedas, como Bitcoin e Ethereum, e descubra como você pode lucrar com esses ativos digitais.
        </Typography>
        <Typography variant="h5" paragraph>
        Junte-se a nós e comece a sua jornada para a liberdade financeira!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
