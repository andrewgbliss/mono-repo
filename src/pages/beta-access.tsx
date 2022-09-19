import type { NextPage } from 'next';
import { NavBar } from '../components/mui/nav/NavBar';
import { Grid, Box, useTheme, Paper, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Theme from '../components/mui/theme/Theme';
import Image from 'next/image';

const Background = styled('main')(({ theme }) => ({
  minWidth: '100vw',
  minHeight: '100vh',
  backgroundColor: '#fff',
  backgroundImage: `url(/img/jumbotron.jpg)`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

const Footer: React.FC = () => {
  const today: Date = new Date();
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent="center"
      style={{
        backgroundColor: theme.palette.primary.main,
        backgroundImage: `radial-gradient(${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
      }}
    >
      <Box p={5} color="#fff">
        Copyright &copy; {today.getFullYear()} Website
      </Box>
    </Grid>
  );
};

const BetaAccess: NextPage = () => {
  return (
    <Theme>
      <NavBar />
      <Background>
        <Box pt={{ xs: 12, lg: 24 }} />
        <Grid container justifyContent="center" alignItems="center" spacing={6}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
            sm={12}
            md={4}
          >
            <Image
              src={'/img/abybyo-phone.png'}
              alt=""
              width={250}
              height={500}
              priority
            />
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
            sm={12}
            md={8}
          >
            <Box>
              <Paper elevation={8}>
                <Box py={1} px={{ xs: 2, sm: 5 }}>
                  <Box
                    component="h3"
                    pt={{ xs: 1, sm: 4 }}
                    fontSize={{ xs: 24, sm: 30, md: 30, lg: 30 }}
                    textAlign="center"
                  >
                    Learning just became easier.
                  </Box>
                  <Box px={{ xs: 2 }}>
                    <p>
                      Create your own study path and improve your knowledge in
                      any subject.
                    </p>
                    <p>
                      Join any classroom, ask questions, download any lesson,
                      improve at your own pace.
                    </p>
                  </Box>
                  <Box pt={2} px={{ xs: 2 }}>
                    <form>
                      <Box>
                        <TextField
                          fullWidth
                          label="Email Address"
                          variant="outlined"
                        />
                      </Box>
                      <Box py={5} textAlign="center">
                        <Button variant="contained" color="primary">
                          Sign Up For Beta Access
                        </Button>
                      </Box>
                    </form>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Background>
      <Footer />
    </Theme>
  );
};

export default BetaAccess;
