import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Grid, CardActionArea, CardContent, CardMedia, Chip } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';

function NewsPosts(props) {
  const { post } = props;

  const tagsArray = post.tags.split('|');
  const displayedTags = tagsArray.slice(0, 3);

  return (
    <Grid item xs={12} md={6} lg={6}>
      <CardActionArea>
        <SubCard sx={{ display: 'flex', flexDirection: 'column', height: '500px' }}>
          <CardMedia
            component="img"
            sx={{ width: '100%', height: 200, flexShrink: 0 }}
            src={post.imageurl}
            alt={post.imageLabel}
          />
          <CardContent sx={{ height: '100%' }}>
            <Typography variant="h2" sx={{ my:2, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
              {post.title}
            </Typography>
            {displayedTags.map((tag, index) => (
              <Chip key={index} label={tag.trim()} variant="outlined" size="small" color="secondary" sx={{ marginRight: 1, marginBottom: 1 }} />
            ))}
            <Typography variant="body2" paragraph sx={{ textAlign: 'justify', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
              {post.body}
            </Typography>
            <Typography variant="subtitle1" color="secondary" component="a" href="#" sx={{my:2}}>
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
