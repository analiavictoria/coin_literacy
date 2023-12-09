/* eslint-disable react/prop-types */
import * as React from 'react';
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
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?finance',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?blockchain',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?cryptocurrency',
    imageLabel: 'Image Text',
  },
];

const posts = [post1];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <MainCard>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
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