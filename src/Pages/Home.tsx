import { FC } from 'react';
import { Grid2 as Grid, useMediaQuery, useTheme } from '@mui/material';
import { useDarkMode } from 'Context/useDarkMode';
import PageContainerGrid from 'Components/Shared/PageContainerGrid';
import Navbar from 'Components/Navbar/Navbar';
import Footer from 'Components/Shared/Footer';
import MainBanner from 'Components/MainBanner/MainBanner';
import UpcomingEvents from 'Components/UpcomingEvents/UpcomingEvents';
import { MockEvents } from '../../MockData';

const Home: FC = () => {
  const { darkMode } = useDarkMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <PageContainerGrid darkMode={darkMode}>
      <Grid size={12}>
        <Navbar darkMode={darkMode} isMobile={isMobile} />
      </Grid>

      <Grid size={12} sx={{ flexGrow: 1 }}>
        <MainBanner />
        <UpcomingEvents darkMode={darkMode} isMobile={isMobile} events={MockEvents} />
      </Grid>

      <Grid size={12}>
        <Footer />
      </Grid>
    </PageContainerGrid>
  );
};

export default Home;
