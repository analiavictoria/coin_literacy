import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';


function NewsPosts(props) {
  const { post } = props;

  // Split tags string into an array using the pipe character "|"
  const tagsArray = post.tags.split('|');

  return (
    <Grid item xs={12} md={6} lg={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '500px' }}>
          <CardMedia
            component="img"
            sx={{ width: '100%', height: 200, flexShrink: 0 }}
            src={post.imageurl}
            alt={post.imageLabel}
          />
          <CardContent sx={{ flex: 1, overflow: 'hidden', height: '100%' }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            {/* Map over the tagsArray create individual Chip components */}
            {tagsArray.map((tag, index) => (
              <Chip key={index} label={tag.trim()} variant="outlined" size="small"
              sx={{
                color: '#25C998',
              }} />
            ))}
            <Typography variant="subtitle1" paragraph>
              {post.body}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continuar leitura...
            </Typography>
          </CardContent>
        </Card>
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
