import { FC } from 'react';
import { Grid2 as Grid, useMediaQuery, useTheme } from '@mui/material';
import { useDarkMode } from 'Context/useDarkMode';
import PageContainerGrid from 'Components/Shared/PageContainerGrid';
import Navbar from 'Components/Navbar/Navbar';
import Footer from 'Components/Footer/Footer';
import HistoryText from 'Components/History/HistoryText';

const History: FC = () => {
  const { darkMode } = useDarkMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <PageContainerGrid darkMode={darkMode}>
      <Grid size={12}>
        <Navbar darkMode={darkMode} isMobile={isMobile} />
      </Grid>

      <Grid size={12} sx={{ flexGrow: 1 }}>
        <HistoryText darkMode={darkMode} />
      </Grid>

      <Grid size={12}>
        <Footer darkMode={darkMode} />
      </Grid>
    </PageContainerGrid>
  );
};

export default History;
