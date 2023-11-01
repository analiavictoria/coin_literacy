import { Grid} from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const Aprenda = () => (
  <MainCard title="Coin literacy explica:">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={6}>
        <SubCard title="Cripto 101: dando os primeiros passos">
          <Grid container direction="column" spacing={1}>

          </Grid>
        </SubCard>
      </Grid>

      <Grid item xs={12} sm={6}>
        <SubCard title="Bitcoin: conheça a primeira criptomoeda">
        </SubCard>
      </Grid>

      <Grid item xs={12} sm={6}>
        <SubCard title="O que é blockchain?">
        </SubCard>
      </Grid>

      <Grid item xs={12} sm={6}>
        <SubCard title="Dicionário do cripto">
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>
);

export default Aprenda;
