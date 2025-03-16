import { FC } from 'react';
import { Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import { Event } from 'Components/Shared/Types';
import LocationButton from 'Components/UpcomingEvents/LocationButton';
import CardMediaContent from 'Components/UpcomingEvents/CardMediaContent';
import ViewEventButton from 'Components/Shared/ViewEventButton';

type UpcomingEventsCardProps = {
  darkMode: boolean;
  event: Event;
};

const UpcomingEventsCard: FC<UpcomingEventsCardProps> = ({ darkMode, event }) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        // TODO: correct responsive sizing
        width: { xs: '1.4rem', sm: '12rem', md: '25rem', lg: '37.5rem' },
        marginX: '3rem',
        borderRadius: '10px',
      }}
    >
      <CardMediaContent event={event} />
      <CardContent>
        <Stack direction="column" alignItems="flex-start">
          <Typography gutterBottom variant="h5">
            {event.type} {event.dateFrom.getFullYear()}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Summary of the event</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <LocationButton darkMode={darkMode} venue={event.venue} />
        <ViewEventButton darkMode={darkMode} eventId={event.id} homePage />
      </CardActions>
    </Card>
  );
};

export default UpcomingEventsCard;
