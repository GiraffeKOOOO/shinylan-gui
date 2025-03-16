import { FC } from 'react';
import { Grid2 as Grid, Stack, Typography } from '@mui/material';
import { Event } from 'Components/Shared/Types';
import EventListItem from 'Components/EventsList/EventListItem';
import Colours from 'Components/Shared/Colours';

type EventsListProps = {
  darkMode: boolean;
  isMobile: boolean;
  events: Event[];
};

const EventsList: FC<EventsListProps> = ({ darkMode, events }) => {
  return (
    <Grid container sx={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
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
          {/* event list */}
          {events.map((event: Event) => (
            <Stack direction="row" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
              <EventListItem event={event} />
            </Stack>
          ))}
        </Stack>
      </Grid>

      {/* Padding right */}
      <Grid size={1} />
    </Grid>
  );
};

export default EventsList;
