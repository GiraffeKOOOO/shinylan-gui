import { FC } from 'react';
import { Grid2 as Grid, useMediaQuery, useTheme } from '@mui/material';
import { useDarkMode } from 'Context/useDarkMode';
import Colours from 'Components/Shared/Colours';
import Navbar from 'Components/Navbar/Navbar';
import Footer from 'Components/Shared/Footer';
import MainBanner from 'Components/MainBanner/MainBanner';
import UpcomingEvents from 'Components/UpcomingEvents/UpcomingEvents';

const Home: FC = () => {
  const { darkMode } = useDarkMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: darkMode ? Colours.darkBackground : Colours.lightBackground,
      }}
      flexDirection="column"
    >
      <Grid size={12}>
        <Navbar darkMode={darkMode} isMobile={isMobile} />
      </Grid>

      <Grid size={12} sx={{ flexGrow: 1 }}>
        <MainBanner />
        <UpcomingEvents darkMode={darkMode} isMobile={isMobile} />
      </Grid>

      <Grid size={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
