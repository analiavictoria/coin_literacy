// src/components/CryptoMarket.js
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import axios from 'axios';

const CryptoMarket = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          method: 'GET',
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });
        console.log(response)
        const data = await response.data;
        console.log(data)
        setCryptoData(data || []); // Ensure data is an array or set to an empty array
    
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
            <TableCell>Coin</TableCell>
            <TableCell>Rank</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Change % 24h</TableCell>
            <TableCell>Market Cap</TableCell>
            <TableCell>Volume 24h</TableCell>
            <TableCell>Circulating Supply</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  {cryptoData && cryptoData.length > 0 ? (
    cryptoData.map((coin) => (
      <TableRow key={coin.id}>
        <TableCell>{coin.name}</TableCell>
        <TableCell>{coin.market_cap_rank}</TableCell>
        <TableCell>${coin.current_price}</TableCell>
        <TableCell>{coin.price_change_percentage_24h}%</TableCell>
        <TableCell>${coin.market_cap}</TableCell>
        <TableCell>${coin.total_volume}</TableCell>
        <TableCell>{coin.circulating_supply}</TableCell>
        <TableCell>
          {coin.categories && coin.categories.length > 0 ? coin.categories.join(', ') : 'N/A'}
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={8}>Loading...</TableCell>
    </TableRow>
  )}
</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoMarket;
