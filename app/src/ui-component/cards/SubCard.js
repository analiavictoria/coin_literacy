import PropTypes from 'prop-types';
import { forwardRef } from 'react';
<<<<<<< HEAD
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography, Box } from '@mui/material';

const SubCard = forwardRef(({ children, content, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, image, ...others }, ref) => {
=======

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

// ==============================|| CUSTOM SUB CARD ||============================== //

const SubCard = forwardRef(({ children, content, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, ...others }, ref) => {
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
  const theme = useTheme();

  return (
    <Card
      ref={ref}
      sx={{
        border: '1px solid',
        borderColor: theme.palette.primary.light,
        ':hover': {
          boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
        },
        ...sx
      }}
      {...others}
    >
<<<<<<< HEAD
      {/* Image area */}
      {image && (
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <img src={image} alt="" style={{ maxWidth: '100%', borderRadius: '8px' }} />
        </Box>
      )}

      {/* card header and action */}
      {!darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h4">{title}</Typography>} action={secondary} />}
=======
      {/* card header and action */}
      {!darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h5">{title}</Typography>} action={secondary} />}
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
      {darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h4">{title}</Typography>} action={secondary} />}

      {/* content & header divider */}
      {title && (
        <Divider
          sx={{
            opacity: 1,
            borderColor: theme.palette.primary.light
          }}
        />
      )}

      {/* card content */}
      {content && (
        <CardContent sx={{ p: 2.5, ...contentSX }} className={contentClass || ''}>
          {children}
        </CardContent>
      )}
      {!content && children}
    </Card>
  );
});

SubCard.propTypes = {
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  sx: PropTypes.object,
  contentSX: PropTypes.object,
<<<<<<< HEAD
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  image: PropTypes.string
=======
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
};

SubCard.defaultProps = {
  content: true
};

export default SubCard;
