import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import UnderConstruction from './under_construction.png';

const Forum = () => {
  const [underConstruction] = useState(true); // Setar para true para habilitar o modo em construção

  return (
    <Box>
      {underConstruction && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.1)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <img src={UnderConstruction} 
          alt="Parede de tijolos"
          ></img>
          <Typography variant="h1" color="primary" sx={{m: 2}} gutterBottom> 
            Em construção!
          </Typography>
          <Typography variant="h2" color="primary" gutterBottom> 
            No momento, estamos trabalhando nesse recurso
          </Typography>
          <Typography variant="h2" color="primary" gutterBottom> 
            e o lançaremos em breve!
          </Typography>
        </div>
      )}

      <MainCard style={{ filter: underConstruction ? 'blur(5px)' : 'none', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      </MainCard>
    </Box>
  );
};

export default Forum;
