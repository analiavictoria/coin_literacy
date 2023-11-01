import React from 'react';
import { Grid } from '@mui/material';
import BlogPost from './BlogPost'; // Import the BlogPost component
import BlogData from './BlogData'; // Import your mock blog data
import MainCard from 'ui-component/cards/MainCard';

function Blog() {
  return (
    <MainCard>
      <Grid container spacing={3}>
        {BlogData.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <BlogPost title={post.title} content={post.content} imageUrl={post.imageUrl} />
          </Grid>
        ))}
      </Grid>
    </MainCard>
    
  );
}

export default Blog;
