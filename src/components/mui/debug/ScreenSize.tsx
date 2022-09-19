import { Box, Grid } from '@mui/material';

export const ScreenSize: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 15,
        right: 15,
        width: 25,
        height: 25,
        opacity: 75,
        backgroundColor: 'white',
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Box
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
              md: 'none',
              lg: 'none',
              xl: 'none',
            },
          }}
        >
          XS
        </Box>
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
              md: 'none',
              lg: 'none',
              xl: 'none',
            },
          }}
        >
          SM
        </Box>
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
              lg: 'none',
              xl: 'none',
            },
          }}
        >
          MD
        </Box>
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'none',
              lg: 'block',
              xl: 'none',
            },
          }}
        >
          LG
        </Box>
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'none',
              lg: 'none',
              xl: 'block',
            },
          }}
        >
          XL
        </Box>
      </Grid>
    </Box>
  );
};
