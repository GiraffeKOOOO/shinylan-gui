import { FC } from 'react';
import { Grid2 as Grid, useMediaQuery, useTheme } from '@mui/material';
import { useDarkMode } from 'Context/useDarkMode';
import Navbar from 'Components/Navbar/Navbar';
import Footer from 'Components/Shared/Footer';
import MainBanner from 'Components/MainBanner/MainBanner';
import PageContainerGrid from 'Components/Shared/PageContainerGrid';

const Contact: FC = () => {
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
        <p>Contact</p>
      </Grid>

      <Grid size={12}>
        <Footer />
      </Grid>
    </PageContainerGrid>
  );
};

export default Contact;
