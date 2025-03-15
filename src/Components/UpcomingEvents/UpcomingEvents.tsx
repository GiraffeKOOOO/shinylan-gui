import { FC } from 'react';
import { Grid2 as Grid, Stack, Typography } from '@mui/material';
import Colours from 'Components/Shared/Colours';
import UpcomingEventsCard from 'Components/UpcomingEvents/UpcomingEventsCard';
import { MockEvents } from '../../../MockData';
import { Event } from 'Components/Shared/Types';

type UpcomingEventsProps = {
  darkMode: boolean;
  isMobile: boolean;
};

const UpcomingEvents: FC<UpcomingEventsProps> = ({ darkMode }) => {
  return (
    <Grid container sx={{ marginTop: '1rem', marginBottom: '2rem' }}>
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
            Upcoming Events
          </Typography>
          {/* event cards */}
          <Stack direction="row" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
            {MockEvents.map((event: Event, iterator) => (
              <UpcomingEventsCard key={iterator} darkMode={darkMode} event={event} />
            ))}
          </Stack>
        </Stack>
      </Grid>

      {/* Padding right */}
      <Grid size={1} />
    </Grid>
  );
};

export default UpcomingEvents;
