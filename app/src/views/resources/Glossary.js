import React from 'react';
import { Typography} from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';

const Glossary = () => (
    <SubCard  title="Glossário de termos cripto" style={{ padding: '16px', marginBottom: '16px' }}>
        <Typography variant="body2" paragraph>
        <strong>Altcoin:</strong> Qualquer criptomoeda além do Bitcoin.
        <br />
        <br />
        <strong> Blockchain: </strong>Um sistema descentralizado e transparente de registro de transações, composto por blocos encadeados de informações.
        <br />
        <br />
        <strong> Carteira Digital: </strong>Local para armazenar chaves privadas e públicas, permitindo o gerenciamento de criptomoedas.
        <br />
        <br />
        <strong>Criptomoeda:</strong> Forma de dinheiro digital que utiliza criptografia para segurança e controle de criação. Exemplos incluem Bitcoin, Ethereum e Litecoin.
        <br />
        <br />
        <strong> Exchange:</strong> Plataforma online para comprar, vender e negociar criptomoedas.
        <br />
        <br />
        <strong> Mineração:</strong> Processo de validar transações e adicionar blocos à blockchain, geralmente recompensado com novas criptomoedas.
        <br />
        <br />
        <strong>Token:</strong> Ativo digital emitido em uma blockchain, representando um ativo ou utilidade específica.
        </Typography>
     </SubCard>
);

export default Glossary;
