import { FC } from 'react';
import { Event } from 'Components/Shared/Types';
import { Card, Divider, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import easterImage from 'Assets/easter.webp';
import summerImage from 'Assets/summer.jpg';
import ViewEventButton from 'Components/Shared/ViewEventButton';
import Colours from 'Components/Shared/Colours';

type EventListItemProps = {
  event: Event;
};

const EventListItem: FC<EventListItemProps> = ({ event }) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat('en-GB', {
      weekday: 'long', // "Friday"
      day: 'numeric', // "7"
      month: 'long', // "April"
      year: 'numeric', // "2025"
    }).format(date);

  return (
    <Card sx={{ border: `1px solid ${Colours.cardBorderGrey}` }}>
      <Stack
        direction="row"
        sx={{
          height: '90px',
          alignItems: 'center',
          paddingRight: '0.5rem',
          borderRadius: '7px',
        }}
      >
        <img
          src={event.type === 'Summer' ? summerImage : easterImage}
          alt={event.type === 'Summer' ? 'summer event image' : 'easter event image'}
          height={90}
          width={200}
        />
        <Typography
          sx={{ marginX: '0.5rem', fontSize: '1.6rem', width: '12rem', fontFamily: 'Varela Round' }}
        >
          {event.type} {event.dateFrom.getFullYear()}
        </Typography>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack direction="column" sx={{ marginX: '0.5rem', width: '16rem' }}>
          <CalendarMonthIcon sx={{ fontSize: '1.2rem', marginX: 'auto' }} />
          <Stack sx={{ alignItems: 'flex-start' }}>
            <Typography>From: {formatDate(event.dateFrom)}</Typography>
            <Typography>To: {formatDate(event.dateTo)}</Typography>
          </Stack>
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack sx={{ marginX: '0.5rem' }}>
          <LocationOnIcon sx={{ fontSize: '1.2rem', marginX: 'auto' }} />
          <Typography>{event.venue.name}</Typography>
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack sx={{ marginX: '0.5rem' }}>
          <GroupsIcon sx={{ fontSize: '1.2rem', marginX: 'auto' }} />
          <Typography>
            {event.signups} / {event.venue.capacity}
          </Typography>
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack sx={{ marginX: '0.5rem' }}>
          <ViewEventButton eventId={event.id} homePage={false} />
        </Stack>
      </Stack>
    </Card>
  );
};

export default EventListItem;
