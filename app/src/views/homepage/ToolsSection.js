import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import BlogSVG from './Blog post.svg';
import LearnSVG from './Course app.svg';
import ConverterSVG from './Calculator.svg';
import { iconPropTypes } from './propTypes'; 


const BlogIcon = ({ isHovered }) => (
  <img
    src={BlogSVG}
    alt="Bitcoin Icon"
    style={{ width: 250, height: 250, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
  />
);

BlogIcon.propTypes = iconPropTypes;

const LearnIcon = ({ isHovered }) => (
  <img
    src={LearnSVG}
    alt="e-wallet Icon"
    style={{ width: 250, height: 250, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
  />
);

LearnIcon.propTypes = iconPropTypes;

const ConverterIcon = ({ isHovered }) => (
  <img
    src={ConverterSVG}
    alt="Revenue Icon"
    style={{ width: 250, height: 250, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
  />
);

ConverterIcon.propTypes = iconPropTypes;

const ToolsSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const sectionItems = [
    {
      id: 1,
      icon: <BlogIcon isHovered={hoveredItem === 1} />,
      title: 'Leia',
      sentence: 'Descubra notícias, tendências e insights profundos sobre criptomoedas e blockchain em nosso blog especializado.',
    },
    {
      id: 2,
      icon: <LearnIcon isHovered={hoveredItem === 2} />,
      title: 'Aprenda',
      sentence: 'Com nossas poderosas ferramentas de aprendizado explore, entenda e invista com confiança!',
    },
    {
      id: 3,
      icon: <ConverterIcon isHovered={hoveredItem === 3} />,
      title: 'Converta',
      sentence: 'Conheça o melhor conversor de criptomoedas! Transformando ativos digitais em valores reai$',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: '300px', py: '5%', px: '3%' }} id='tools'>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Typography variant='h1'>Ferramentas</Typography>
        <Typography
          variant='body2'
          sx={{ textAlign: 'center', px: '10%', pt: '2%', pb: '4%'}}
        >
          Através do nosso blog, fontes de conhecimento e calculadora conversora de criptomoedas, queremos capacitar nossa comunidade para alcançar a liberdade financeira. Aprenda sobre os conceitos básicos das criptomoedas, como Bitcoin e Ethereum, e descubra como você pode lucrar com esses ativos digitais.
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
            <Typography variant='h2' margin={3}>
              {item.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {item.sentence}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ToolsSection;
