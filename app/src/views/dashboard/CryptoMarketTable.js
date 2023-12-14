// src/components/CryptoMarket.js
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip } from '@mui/material';

import axios from 'axios';

const CryptoMarket = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          method: 'GET',
          params: {
            vs_currency: 'brl',
            order: 'market_cap_desc',
            per_page: 5,
            page: 1,
            sparkline: false,
          },
        });
        console.log(response)
        const data = await response.data;
        console.log(data)
        setCryptoData(data || []); 
    
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };
  
    fetchCryptoData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <Tooltip title="Nome da Moeda">
              <TableCell>Moeda</TableCell>
            </Tooltip>
            <Tooltip title="Rank ou classificação de mercado é a posição relativa que uma criptomoeda ocupa no mercado. Normalmente, a classificação de uma moeda digital é avaliada pela sua capitalização de mercado.">
              <TableCell>Rank</TableCell>
            </Tooltip>
            <Tooltip title="Preço Atual">
              <TableCell>Preço</TableCell>
            </Tooltip>
            <Tooltip title="Este é um bom indicador de quão volátil uma determinada criptomoeda é no dia a dia.">
              <TableCell>Variação de Preço em 24h</TableCell>
            </Tooltip>
            <Tooltip title="A capitalização de mercado é calculada multiplicando o preço de uma criptomoeda pela sua oferta circulante em um determinado momento. É um indicador da propensão à estabilidade de um ativo, pois é mais provável que uma criptomoeda com uma capitalização de mercado maior seja um investimento mais estável.">
              <TableCell>Capitalização de mercado</TableCell>
            </Tooltip>
            <Tooltip title="A primeira característica do mercado de criptomoedas é que ele nunca fecha. O volume de negociação de uma criptomoeda em 24 horas é quanto o valor de uma moeda foi comprado e vendido ao longo de um dia. Ao analisar o volume de uma moeda em períodos curtos e longos, os investidores podem prever os movimentos que ela provavelmente fará.">
              <TableCell>Volume em 24h</TableCell>
            </Tooltip>
            <Tooltip title="Refere-se ao número de moedas ou tokens de uma criptomoeda específica que estão publicamente disponíveis para compra ou venda. Se você puder negociá-los, eles serão considerados em circulação.">
              <TableCell>Fornecimento Circulante</TableCell>
            </Tooltip>
          </TableRow>
        </TableHead>
        <TableBody>
          {cryptoData && cryptoData.length > 0 ? (
            cryptoData.map((coin) => (
              <TableRow key={coin.id}>
                <TableCell>{coin.name}</TableCell>
                <TableCell>{coin.market_cap_rank}</TableCell>
                <TableCell>R${coin.current_price}</TableCell>
                <TableCell>{coin.price_change_percentage_24h}%</TableCell>
                <TableCell>R${coin.market_cap}</TableCell>
                <TableCell>R${coin.total_volume}</TableCell>
                <TableCell>{coin.circulating_supply}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8}>Carregando...</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


export default CryptoMarket;
