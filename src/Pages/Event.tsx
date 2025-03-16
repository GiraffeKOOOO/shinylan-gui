import { FC } from 'react';
import { Grid2 as Grid, useMediaQuery, useTheme } from '@mui/material';
import { useParams } from 'react-router';
import { useDarkMode } from 'Context/useDarkMode';
import PageContainerGrid from 'Components/Shared/PageContainerGrid';
import Navbar from 'Components/Navbar/Navbar';
import Footer from 'Components/Shared/Footer';

const Event: FC = () => {
  const { darkMode } = useDarkMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { id } = useParams();

  return (
    <PageContainerGrid darkMode={darkMode}>
      <Grid size={12}>
        <Navbar darkMode={darkMode} isMobile={isMobile} />
      </Grid>

      <Grid size={12} sx={{ flexGrow: 1 }}>
        {/* Event Content */}
        <p>EVENT ID: {id}</p>
      </Grid>

      <Grid size={12}>
        <Footer />
      </Grid>
    </PageContainerGrid>
  );
};

export default Event;
