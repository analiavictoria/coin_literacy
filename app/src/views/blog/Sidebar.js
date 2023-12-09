import * as React from 'react';
import PropTypes from 'prop-types';
import{ Grid, Paper } from '@mui/material';

function Sidebar() {

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: '#dff6ed' }}>
    
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;