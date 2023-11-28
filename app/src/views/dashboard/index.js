import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';
import CryptoList from './CryptoList';
import CryptoComparison from './CryptoComparison';



// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {

  return (
      <>
        <Grid container spacing={gridSpacing}>
                    
          <Grid item xs={12} sm={6}>
            <SubCard title="Cotação de criptomoedas">
            <CryptoList></CryptoList>
            </SubCard>
          </Grid> 

          <Grid item xs={12} sm={6}>
            <SubCard title="Comparação de Preços de Criptomoedas (BRL)">
                <CryptoComparison></CryptoComparison>
            </SubCard>
          </Grid>  

        </Grid>
      </>
  );
};

export default Dashboard;
