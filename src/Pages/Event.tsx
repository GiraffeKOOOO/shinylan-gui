import { FC } from 'react';
import { Grid2 as Grid, useMediaQuery, useTheme } from '@mui/material';
import { useSearchParams } from 'react-router';
import { useDarkMode } from 'Context/useDarkMode';
import PageContainerGrid from 'Components/Shared/PageContainerGrid';
import Navbar from 'Components/Navbar/Navbar';
import Footer from 'Components/Footer/Footer';
import EventBanner from 'Components/EventBanner/EventBanner';
import { MockEvents } from '../../MockData';

const Event: FC = () => {
  const [searchParams] = useSearchParams();
  const urlId = searchParams.get('id');
  const filteredEvent = MockEvents.find((event) => event.id.toString() === urlId);
  const { darkMode } = useDarkMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (filteredEvent) {
    return (
      <PageContainerGrid darkMode={darkMode}>
        <Grid size={12}>
          <Navbar darkMode={darkMode} isMobile={isMobile} />
        </Grid>

        <Grid size={12} sx={{ flexGrow: 1 }}>
          {/* Event Content */}
          <EventBanner darkMode={darkMode} event={filteredEvent} />
        </Grid>

        <Grid size={12}>
          <Footer darkMode={darkMode} />
        </Grid>
      </PageContainerGrid>
    );
  } else {
    // display empty page
  }
};

export default Event;
