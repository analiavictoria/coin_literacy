import { Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';
import CryptoList from './CryptoList';
import CryptoComparison from './CryptoComparison';
import CryptoMarket from  './CryptoMarketTable'

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {

  return (
      <>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
            {/*lg= large screens, md=medium screens, sm=: small screens, xs=: extra-small screens*/}       
            <Grid item  lg={12} md={12} sm={12} xs={12}>
                <SubCard>
                  <Typography variant='h2' marginBottom={5} color="secondary" textAlign={'center'}>Visão Geral do Mercado Crypto</Typography>
                  <CryptoMarket></CryptoMarket>
                </SubCard>
              </Grid>  
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <SubCard>
                  <Typography variant='h2' marginBottom={5} color="secondary">Cotação de criptomoedas</Typography>
                <CryptoList></CryptoList>
                </SubCard>
              </Grid>
              
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <SubCard>
                <Typography variant='h2' marginBottom={5} color="secondary">Comparação de Preços de Criptomoedas (BRL)</Typography>
                  <CryptoComparison></CryptoComparison>
                </SubCard>
              </Grid>  
              
            </Grid>
          </Grid> 

        </Grid>
      </>
  );
};

export default Dashboard;
