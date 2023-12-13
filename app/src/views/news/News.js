/* eslint-disable react/prop-types */
import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainCard from 'ui-component/cards/MainCard';
import NewsPosts from './NewsPosts';
import axios from 'axios';


export default function News() {
  const [cryptoNews, setCryptoNews] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://min-api.cryptocompare.com/data/v2/news/?lang=PT',
        );
        console.log(response)
        setCryptoNews(response.data.Data);
        console.log(cryptoNews)
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };
    fetchCryptoData();
  }, []);

  return (
    <MainCard>
      <Container maxWidth="lg">
          <Grid container spacing={4}>
            {cryptoNews.map((post) => (
              <NewsPosts key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          </Grid>
      </Container>
    </MainCard>
  );
}