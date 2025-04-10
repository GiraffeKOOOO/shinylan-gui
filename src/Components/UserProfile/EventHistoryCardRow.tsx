import { FC } from 'react';
import { Card, Divider, Stack, Typography } from '@mui/material';
import { Event } from 'Components/Shared/Types';
import ViewEventButton from 'Components/UserProfile/ViewEventButton';
import Colours from 'Components/Shared/Colours';

type EventHistoryCardRowProps = {
  darkMode: boolean;
  event: Event;
};

const EventHistoryCardRow: FC<EventHistoryCardRowProps> = ({ darkMode, event }) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat('en-GB', {
      weekday: 'short', // "Friday"
      day: 'numeric', // "7"
      month: 'short', // "April"
      year: 'numeric', // "2025"
    }).format(date);

  return (
    <Card sx={{ border: `1px solid ${Colours.cardBorderGrey}` }}>
      <Stack
        direction="row"
        sx={{
          height: '4.5rem',
          alignItems: 'center',
          paddingRight: '0.2rem',
          borderRadius: '7px',
          justifyContent: 'space-evenly',
        }}
      >
        <Stack direction="column" sx={{ marginX: '0.2rem' }}>
          <Typography>
            {event.type} {event.dateFrom.getFullYear()}
          </Typography>
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack direction="column" sx={{ marginX: '0.2rem' }}>
          <Typography>Date </Typography>
          <Divider orientation="horizontal" sx={{ marginX: '0.1rem' }} />
          <Typography>
            {formatDate(event.dateFrom)} → {formatDate(event.dateTo)}
          </Typography>
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack direction="column" sx={{ marginX: '0.2rem' }}>
          <Typography>Venue</Typography>
          <Divider orientation="horizontal" sx={{ marginX: '0.1rem' }} />
          <Typography>{event.venue.name}</Typography>
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack direction="column" sx={{ marginX: '0.2rem' }}>
          <Typography>Attendees</Typography>
          <Divider orientation="horizontal" sx={{ marginX: '0.1rem' }} />
          {event.signups} / {event.venue.capacity}
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack sx={{ width: '13rem', p: '0.4rem' }}>
          <ViewEventButton event={event} darkMode={darkMode} />
        </Stack>
      </Stack>
    </Card>
  );
};

export default EventHistoryCardRow;
