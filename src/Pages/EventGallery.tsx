import { FC } from 'react';
import { Grid2 as Grid, useMediaQuery, useTheme } from '@mui/material';
import { useSearchParams } from 'react-router';
import { useDarkMode } from 'Context/useDarkMode';
import PageContainerGrid from 'Components/Shared/PageContainerGrid';
import EventPhotoList from 'Components/Gallery/EventPhotoList';
import Navbar from 'Components/Navbar/Navbar';
import Footer from 'Components/Shared/Footer';
import { MockEvents } from '../../MockData';

const EventGallery: FC = () => {
  const [searchParams] = useSearchParams();
  const urlId = searchParams.get('id');
  const filteredEvent = MockEvents.find((event) => event.id.toString() === urlId);

  const { darkMode } = useDarkMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!filteredEvent) return;

  return (
    <PageContainerGrid darkMode={darkMode}>
      <Grid size={12}>
        <Navbar darkMode={darkMode} isMobile={isMobile} />
      </Grid>

      <Grid size={12} sx={{ flexGrow: 1 }}>
        <EventPhotoList darkMode={darkMode} event={filteredEvent} />
      </Grid>

      <Grid size={12}>
        <Footer />
      </Grid>
    </PageContainerGrid>
  );
};

export default EventGallery;
