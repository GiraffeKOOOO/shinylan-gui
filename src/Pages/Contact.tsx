import { FC } from 'react';
import { Grid2 as Grid, useMediaQuery, useTheme } from '@mui/material';
import { useDarkMode } from 'Context/useDarkMode';
import Colours from 'Components/Shared/Colours';
import Navbar from 'Components/Navbar/Navbar';
import Footer from 'Components/Shared/Footer';
import MainBanner from 'Components/MainBanner/MainBanner';

const Contact: FC = () => {
  const { darkMode } = useDarkMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      sx={{ backgroundColor: darkMode ? Colours.darkBackground : Colours.lightBackground }}
      flexDirection="column"
    >
      <Grid size={12}>
        <Navbar darkMode={darkMode} isMobile={isMobile} />
      </Grid>

      <Grid size={12}>
        <MainBanner />
        <p>Contact</p>
      </Grid>

      <Grid size={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Contact;
