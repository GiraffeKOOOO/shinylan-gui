import { FC, useEffect, useState } from 'react';
import { CircularProgress, Grid2 as Grid, Stack, Typography } from '@mui/material';
import { Event } from 'Components/Shared/Types';
import EventGallery from 'Components/Gallery/EventGallery';
import Colours from 'Components/Shared/Colours';
import { MockEvents } from '../../../MockData';

type GalleryEventListProps = {
  darkMode: boolean;
};

const GalleryEventList: FC<GalleryEventListProps> = ({ darkMode }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setEvents(MockEvents);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Grid container sx={{ marginTop: '1rem', marginBottom: '3rem' }}>
      {/* Padding left */}
      <Grid size={1} />

      {/* center column - main content */}
      <Grid size={10}>
        {/* Title */}
        <Stack direction="column">
          <Typography
            sx={{
              color: darkMode ? Colours.darkText : Colours.lightText,
              fontSize: {
                xs: '1.4rem',
                sm: '2rem',
                lg: '2.5rem',
              },
              letterSpacing: '-1.5px',
              fontFamily: 'Varela Round',
            }}
          >
            Gallery
          </Typography>
          {/* List of gallery folders */}
          <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
            {loading ? (
              <Grid size={12} sx={{ textAlign: 'center' }}>
                <CircularProgress />
              </Grid>
            ) : (
              events.map((event, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Stack direction="row" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
                    <EventGallery event={event} />
                  </Stack>
                </Grid>
              ))
            )}
          </Grid>
        </Stack>
      </Grid>

      {/* Padding right */}
      <Grid size={1} />
    </Grid>
  );
};

export default GalleryEventList;
