import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import BlogSVG from './Blog post.svg'
import LearnSVG from './Course app.svg';
import ConverterSVG from './Calculator.svg';

const BlogIcon = ({ isHovered }) => (
  <img src={BlogSVG} alt="Bitcoin Icon" style={{ width: 250, height: 250, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
);

const LearnIcon = ({ isHovered }) => (
  <img src={LearnSVG} alt="e-wallet Icon" style={{ width: 250, height: 250, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
);

const ConverterIcon = ({ isHovered }) => (
  <img src={ConverterSVG} alt="Revenue Icon" style={{ width: 250, height: 250, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
);



const ToolsSection = () => {

  const [hoveredItem, setHoveredItem] = useState(null);

  const sectionItems = [
    {
      id: 1,
      icon: <BlogIcon isHovered={hoveredItem === 1} />,
      title:'Blog',
      sentence: 'Você já se questionou sobre o fascinante mundo das criptomoedas? ',
    },
    {
      id: 2,
      icon: <LearnIcon isHovered={hoveredItem === 2}/>,
      title: 'Aprenda',
      sentence: 'Antes de entrar no mercado cripto, é importante entender o básico.',
    },
    {
      id: 3,
      icon: <ConverterIcon isHovered={hoveredItem === 3}  />,
      title:'Conversor',
      sentence: 'O melhor conversor de criptografia: transformando ativos digitais em valor real',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: '300px', py: '5%', px:'3%' }} id='tools'>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Typography variant='h1'>Ferramentas</Typography>
        <Typography variant="h5" sx={{textAlign: 'center', px:'10%'}} gutterBottom> 
        Através do nosso blog, trilhas de conhecimento e calculadora conversora de criptomoedas, queremos capacitar nossa comunidade a alcançar a liberdade financeira. Aprenda sobre os conceitos básicos das criptomoedas, como Bitcoin e Ethereum, e descubra como você pode lucrar com esses ativos digitais.
        </Typography>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            sx={{ textAlign: 'center' }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.icon}
            <Typography variant='h1' margin={3}>
              {item.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {item.sentence}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ToolsSection;
