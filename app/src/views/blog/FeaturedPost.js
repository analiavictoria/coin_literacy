import * as React from 'react';
import { Typography, Grid, CardActionArea,  CardContent, CardMedia, Chip} from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';


export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <SubCard sx={{ display: 'flex'}}>
      <CardActionArea component="a" href="#">
      <CardMedia
            component="img"
            sx={{ width: '100%', height:'18.75rem', display: { xs: 'none', sm: 'block' } }}
            src={post.imageBlog}
            alt={post.imageLabel}
          />
        
          <CardContent sx={{ flex: 1, height:'23.75rem'  }}>
            <Typography variant="h3" sx={{textAlign: 'center'}}>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{textAlign: 'center'}}>
              {post.created_at}
            </Typography>
            <Chip 
            label={post.categoryBlogPost} 
            sx={{my:1}} 
            variant='outlined'
            color='secondary'
            size='small'>
            </Chip>
            <Typography variant="body2" sx={{textAlign: 'justify', textOverflow: 'ellipsis'}} paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              Continuar lendo...
            </Typography>
            
          </CardContent>
    
      </CardActionArea>
      </SubCard>
      
    </Grid>
  );
}