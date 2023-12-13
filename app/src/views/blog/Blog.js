/* eslint-disable react/prop-types */
import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import post1 from './blog-post.1.md'
import MainCard from 'ui-component/cards/MainCard';

import axios from 'axios';


const sections = [
  { title: 'Blockchain', url: '#' },
  { title: 'Economia Digital', url: '#' },
  { title: 'Criptomoedas', url: '#' },
  { title: 'Bitcoin', url: '#' },
  { title: 'Investimentos', url: '#' },
  { title: 'Finanças', url: '#' },
  { title: 'Segurança', url: '#' },
  { title: 'Compra e Venda', url: '#' },
];

const mainFeaturedPost = {
  title: 'Desvendando o Universo das Criptomoedas: Uma Jornada Rumo ao Futuro Financeiro!',
  description:
    "Você já se perguntou como as criptomoedas estão redefinindo o cenário financeiro global? Prepare-se para embarcar em uma jornada fascinante pelo mundo das moedas digitais e descobrir o que o futuro reserva para a nossa economia",
  image: 'https://source.unsplash.com/random?finance',
  imageText: 'main image description',
};

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?blockchain',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?cryptocurrency',
//     imageLabel: 'Image Text',
//   },
// ];



const posts = [post1];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
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
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {cryptoNews.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Posts" posts={posts} />
            <Sidebar/>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
    </MainCard>
  );
}