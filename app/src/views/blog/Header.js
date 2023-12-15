/* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Typography, Chip } from '@mui/material';

function Header(props) {
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          variant="h1"
          color="primary"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Blog
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Chip 
            label={section.title}
            key={section.title}
            href={section.url}
            variant='outlined'
            color='secondary'
          >

          </Chip>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;