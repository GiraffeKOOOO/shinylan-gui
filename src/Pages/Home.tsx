import { FC } from 'react';
import Grid from '@mui/material/Grid2';
import Navbar from 'Components/Shared/Navbar';
import Footer from 'Components/Shared/Footer';
import MainBanner from 'Components/MainBanner/MainBanner';
import LongText from 'Components/LongText';

const Home: FC = () => {
  // const { darkMode } = useDarkMode();

  return (
    <Grid
      container
      sx={
        {
          // backgroundColor: darkMode ? darkColour : lightColour,
        }
      }
      flexDirection="column"
    >
      <Grid size={12}>
        <Navbar />
      </Grid>

      <Grid size={12}>
        <MainBanner />
        <LongText />
      </Grid>

      <Grid size={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
