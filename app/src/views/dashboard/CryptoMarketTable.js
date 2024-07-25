import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info'; 

const CryptoMarket = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'brl',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });
        setCryptoData(response.data || []);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
  }, []);

  // determine the style based on value
  const getStyleForValue = (value) => ({
    color: value < 0 ? 'red' : 'green',
  });

  //format numbers with commas and dots
  const formatNumber = (number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(number);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Moeda</TableCell>
            <TableCell>
              <Tooltip title="Rank ou classificação de mercado é a posição relativa que uma criptomoeda ocupa no mercado. Normalmente, a classificação de uma moeda digital é avaliada pela sua capitalização de mercado.">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Rank <InfoIcon sx={{ fontSize: 18, marginLeft: 0.5 }} />
                </div>
              </Tooltip>
            </TableCell>
            <TableCell>
              <Tooltip title="Preço Atual">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Preço <InfoIcon sx={{ fontSize: 18, marginLeft: 0.5 }} />
                </div>
              </Tooltip>
            </TableCell>
            <TableCell>
              <Tooltip title="Este é um bom indicador de quão volátil uma determinada criptomoeda é no dia a dia.">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Variação de Preço em 24h <InfoIcon sx={{ fontSize: 18, marginLeft: 0.5 }} />
                </div>
              </Tooltip>
            </TableCell>
            <TableCell>
              <Tooltip title="A capitalização de mercado é calculada multiplicando o preço de uma criptomoeda pela sua oferta circulante em um determinado momento. É um indicador da propensão à estabilidade de um ativo, pois é mais provável que uma criptomoeda com uma capitalização de mercado maior seja um investimento mais estável.">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Capitalização de mercado <InfoIcon sx={{ fontSize: 18, marginLeft: 0.5 }} />
                </div>
              </Tooltip>
            </TableCell>
            <TableCell>
              <Tooltip title="A primeira característica do mercado de criptomoedas é que ele nunca fecha. O volume de negociação de uma criptomoeda em 24 horas é quanto o valor de uma moeda foi comprado e vendido ao longo de um dia. Ao analisar o volume de uma moeda em períodos curtos e longos, os investidores podem prever os movimentos que ela provavelmente fará.">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Volume em 24h <InfoIcon sx={{ fontSize: 18, marginLeft: 0.5 }} />
                </div>
              </Tooltip>
            </TableCell>
            <TableCell>
              <Tooltip title="Refere-se ao número de moedas ou tokens de uma criptomoeda específica que estão publicamente disponíveis para compra ou venda. Se você puder negociá-los, eles serão considerados em circulação.">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Fornecimento Circulante <InfoIcon sx={{ fontSize: 18, marginLeft: 0.5 }} />
                </div>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cryptoData && cryptoData.length > 0 ? (
            cryptoData.map((coin) => (
              <TableRow key={coin.id}>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={coin.image} alt={`${coin.name} logo`} style={{ width: 40, height: 40, marginRight: 8 }} />
                    <span>{coin.name}</span>
                  </div>
                </TableCell>
                <TableCell>{coin.market_cap_rank}</TableCell>
                <TableCell>{formatNumber(coin.current_price)}</TableCell>
                <TableCell style={getStyleForValue(coin.price_change_percentage_24h)}>
                  {coin.price_change_percentage_24h}%
                </TableCell>
                <TableCell>{formatNumber(coin.market_cap)}</TableCell>
                <TableCell>{formatNumber(coin.total_volume)}</TableCell>
                <TableCell>{formatNumber(coin.circulating_supply)}</TableCell>
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
