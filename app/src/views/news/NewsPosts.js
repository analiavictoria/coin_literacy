import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import {Grid,  CardActionArea, CardContent, CardMedia, Chip} from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';

function NewsPosts(props) {
  const { post } = props;

  const tagsArray = post.tags.split('|');

  return (
    
      <Grid item xs={12} md={6} lg={6}>
      <CardActionArea component="a" href="#">
        <SubCard sx={{ display: 'flex', flexDirection: 'column', height: '500px' }}>
          <CardMedia
            component="img"
            sx={{ width: '100%', height: 200, flexShrink: 0 }}
            src={post.imageurl}
            alt={post.imageLabel}
          />
          <CardContent sx={{ flex: 1, overflow: 'hidden', height: '100%' }}>
            <Typography variant="h2" sx={{my:2}}>
              {post.title}
            </Typography>
            {tagsArray.map((tag, index) => (
              <Chip key={index} label={tag.trim()} variant="outlined" size="small" color='secondary' sx={{marginRight:1}}/>
            ))}
            <Typography variant="body2" paragraph sx={{textAlign: 'justify', my:2}}>
              {post.body}
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              Continuar leitura...
            </Typography>
          </CardContent>
        </SubCard>
      </CardActionArea>
    </Grid>

    
  );
}

NewsPosts.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    imageLabel: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsPosts;
