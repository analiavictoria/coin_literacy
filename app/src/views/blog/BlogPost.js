/* eslint-disable react/prop-types */

import React from 'react';
import {CardContent, CardMedia, Typography } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';

function BlogPost({ title, content, imageUrl }) {
  return (
      <SubCard>
      <CardMedia component="img" height="200" src={imageUrl} alt={title} />
      <CardContent>
        <Typography variant="h4" component="div" align="center" sx={{m:1}}>
          {title}
        </Typography>
        <Typography variant="body2" align="justify">{content}</Typography>
      </CardContent>
      </SubCard>
  );
}

export default BlogPost;
