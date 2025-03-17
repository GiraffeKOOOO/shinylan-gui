import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { Event } from 'Components/Shared/Types';
import Colours from 'Components/Shared/Colours';
import easterImage from 'Assets/easter.webp';
import summerImage from 'Assets/summer.jpg';

type EventBannerProps = {
  darkMode: boolean;
  event: Event;
};

const EventBanner: FC<EventBannerProps> = ({ event }) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat('en-GB', {
      weekday: 'long', // "Friday"
      day: 'numeric', // "7"
      month: 'long', // "April"
      year: 'numeric', // "2025"
    }).format(date);

  return (
    <Stack sx={{ position: 'static' }}>
      <Stack
        sx={{
          backgroundImage: `url(${event.type === 'Summer' ? summerImage : easterImage})`,
          height: '400px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 44%',
        }}
      >
        <Stack
          sx={{
            height: '300px',
            width: '90vw',
            backgroundColor: Colours.bannerImageBackground,
            position: 'relative',
            bottom: '-15%',
            left: '5%',
            borderRadius: '10px',
            backdropFilter: 'blur(3px)',
          }}
        >
          <Stack flexDirection="column" sx={{ margin: 'auto' }}>
            <Stack sx={{ margin: 'auto' }}>
              <Typography
                sx={{
                  color: Colours.darkText,
                  fontSize: {
                    xs: '1.4rem',
                    sm: '3rem',
                    md: '3.5rem',
                    lg: '3.5rem',
                  },
                  letterSpacing: '-1.5px',
                  fontFamily: 'Varela Round',
                  marginRight: {
                    xs: '0.4rem',
                    sm: '0.5rem',
                    md: '1rem',
                  },
                }}
              >
                {event.type} {event.dateFrom.getFullYear()}
              </Typography>
            </Stack>
            <Stack sx={{ margin: 'auto', marginTop: '1.5rem' }}>
              <Stack direction="row" gap={6}>
                <Stack direction="column">
                  <Typography sx={{ fontSize: '1rem', color: Colours.darkText }}>
                    Signups
                  </Typography>
                  <Typography sx={{ fontSize: '2rem', color: Colours.darkText }}>
                    {event.signups} / {event.venue.capacity}
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography sx={{ fontSize: '1rem', color: Colours.darkText }}>
                    Location
                  </Typography>
                  <Typography sx={{ fontSize: '2rem', color: Colours.darkText }}>
                    {event.venue.name}
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography sx={{ fontSize: '1rem', color: Colours.darkText }}>
                    Start Time
                  </Typography>
                  <Typography sx={{ fontSize: '2rem', color: Colours.darkText }}>
                    {formatDate(event.dateFrom)} 1:00pm
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography sx={{ fontSize: '1rem', color: Colours.darkText }}>
                    End Time
                  </Typography>
                  <Typography sx={{ fontSize: '2rem', color: Colours.darkText }}>
                    {formatDate(event.dateFrom)} 1:00pm
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EventBanner;
