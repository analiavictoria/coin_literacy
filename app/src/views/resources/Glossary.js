<<<<<<< HEAD
import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import GlossaryImg from './glossary.png'


const Glossary = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };

    return (
        <SubCard
            title='Glossário de termos cripto'
            image={GlossaryImg}
            sx={{
                padding: '16px',
                marginBottom: '16px',
                maxHeight: expanded ? 'none' : '800px', // Altura fixa quando colapsado
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-out', 
            }}
        >
            <Box sx={{ marginBottom: '16px' }}>
                <Typography variant='body1' paragraph sx={{ textAlign: 'justify' }}>
                    <strong>Altcoin:</strong> Termo usado para descrever qualquer criptomoeda além do Bitcoin. Altcoin é uma abreviação de alternative coin (moeda alternativa).<br /><br />
                    <strong>Blockchain:</strong> Tecnologia por trás das criptos, é um registro digital de transações distribuído em vários computadores, formando uma cadeia de blocos.<br /><br />
                    {expanded && (
                        <>
                            <strong>Carteira Digital (Wallet):</strong> Um software ou hardware que armazena chaves privadas e públicas, permitindo que os usuários interajam com suas criptomoedas.<br /><br />
                            <strong>Criptomoeda:</strong> Uma forma de moeda digital que utiliza criptografia para garantir transações, controlar a criação de novas unidades e verificar a transferência de ativos.<br /><br />
                            <strong>Exchange:</strong> Uma plataforma online onde os usuários podem comprar, vender e negociar criptomoedas.<br /><br />
                            <strong>Faucet:</strong> Um site ou aplicativo que distribui pequenas quantidades de criptomoedas gratuitamente, muitas vezes como uma forma de promoção.<br /><br />
                            <strong>ICO (Oferta Inicial de Moedas):</strong> Um método de captação de recursos no qual novas criptomoedas são vendidas ao público para financiar o desenvolvimento de um projeto.<br /><br />
                            <strong>Mining (Mineração):</strong> O processo de validar transações e adicionar novos blocos à blockchain, geralmente realizado por computadores poderosos que resolvem complexos problemas matemáticos.<br /><br />
                            <strong>Nó:</strong> Um computador que faz parte da rede de uma criptomoeda e mantém uma cópia completa da blockchain.<br /><br />
                            <strong>Private Key (Chave Privada):</strong> Uma sequência de números e letras que permite o acesso e controle dos ativos em uma carteira de criptomoeda.<br /><br />
                            <strong>QR Code:</strong> Um código de barras bidimensional que pode ser escaneado para transferir informações, frequentemente utilizado para representar endereços de carteiras de criptomoedas.<br /><br />
                            <strong>Stablecoin:</strong> Uma criptomoeda projetada para manter um valor estável, muitas vezes vinculada a uma moeda fiduciária como o dólar americano.<br /><br />
                            <strong>Token:</strong> Uma unidade de valor emitida por uma entidade privada que opera em uma blockchain existente, muitas vezes representando ativos ou direitos específicos.<br /><br />
                            <strong>Wallet (Carteira):</strong> Ver Carteira Digital.<br />
                        </>
                    )}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" onClick={handleToggle}>
                    {expanded ? 'Leia menos' : 'Leia mais'}
                </Button>
            </Box>
        </SubCard>
    );
};
=======
import React from 'react';
import { Typography} from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';

const Glossary = () => (
    <SubCard  title='Glossário de termos cripto' style={{ padding: '16px', marginBottom: '16px' }}>
        <Typography variant='body2' paragraph>
        <strong>Altcoin:</strong> Termo usado para descrever qualquer criptomoeda além do Bitcoin. Altcoin é uma abreviação de alternative coin (moeda alternativa).<br /><br />
        <strong>Blockchain:</strong> Um registro digital de transações que é distribuído em vários computadores, formando uma cadeia de blocos. É a tecnologia fundamental por trás das criptomoedas.<br /><br />
        <strong>Carteira Digital (Wallet):</strong> Um software ou hardware que armazena chaves privadas e públicas, permitindo que os usuários interajam com suas criptomoedas.<br /><br />
        <strong>Criptomoeda:</strong> Uma forma de moeda digital que utiliza criptografia para garantir transações, controlar a criação de novas unidades e verificar a transferência de ativos.<br /><br />
        <strong>Exchange:</strong> Uma plataforma online onde os usuários podem comprar, vender e negociar criptomoedas.<br /><br />
        <strong>Faucet:</strong> Um site ou aplicativo que distribui pequenas quantidades de criptomoedas gratuitamente, muitas vezes como uma forma de promoção.<br /><br />
        <strong>Hard Fork:</strong> Uma atualização de protocolo que não é compatível com versões anteriores, resultando em duas versões distintas da blockchain.<br /><br />
        <strong>ICO (Oferta Inicial de Moedas):</strong> Um método de captação de recursos no qual novas criptomoedas são vendidas ao público para financiar o desenvolvimento de um projeto.<br /><br />
        <strong>Mining (Mineração):</strong> O processo de validar transações e adicionar novos blocos à blockchain, geralmente realizado por computadores poderosos que resolvem complexos problemas matemáticos.<br /><br />
        <strong>Nó:</strong> Um computador que faz parte da rede de uma criptomoeda e mantém uma cópia completa da blockchain.<br /><br />
        <strong>Private Key (Chave Privada):</strong> Uma sequência de números e letras que permite o acesso e controle dos ativos em uma carteira de criptomoeda.<br /><br />
        <strong>QR Code:</strong> Um código de barras bidimensional que pode ser escaneado para transferir informações, frequentemente utilizado para representar endereços de carteiras de criptomoedas.<br /><br />
        <strong>Stablecoin:</strong> Uma criptomoeda projetada para manter um valor estável, muitas vezes vinculada a uma moeda fiduciária como o dólar americano.<br /><br />
        <strong>Token:</strong> Uma unidade de valor emitida por uma entidade privada que opera em uma blockchain existente, muitas vezes representando ativos ou direitos específicos.<br /><br />
        <strong>Wallet (Carteira):</strong> Ver Carteira Digital.<br />
        </Typography>
     </SubCard>
);
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a

export default Glossary;
