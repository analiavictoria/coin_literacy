import React from 'react';
import { Typography} from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';

const Crypto101 = () => (
  <SubCard  title="Cripto 101: dando os primeiros passos" style={{ padding: '16px', marginBottom: '16px' }}>
    
    <Typography variant="body2" paragraph sx={{textAlign:'justify'}}>
    As criptomoedas têm conquistado espaço e atenção nos últimos anos, tornando-se uma parte intrigante e, para muitos, um tanto misteriosa do mundo financeiro. Se você está se sentindo um pouco perdido no meio desse universo de códigos e blockchain, não se preocupe. Vamos dar os primeiros passos juntos no fascinante mundo da cripto.
    <br />
    <br />
    <Typography variant='h5'>
    O que são Criptomoedas?
    </Typography>
    <br />
    Em termos simples, criptomoedas são formas de dinheiro digital que utilizam a criptografia para garantir transações seguras e para controlar a criação de novas unidades. A mais famosa delas é o Bitcoin, mas há muitas outras, como Ethereum, Ripple e Litecoin.
    <br />
    <br />
    <Typography variant='h5'>
    Por onde Começar?
    </Typography>
    <br />
    Antes de começar a investir ou utilizar criptomoedas, é importante entender alguns conceitos básicos. Primeiramente, familiarize-se com a ideia de blockchain, que é o sistema que sustenta a maioria das criptomoedas. 
    </Typography>
    
  </SubCard>
);

export default Crypto101;
