import { FC } from 'react';
import { Stack } from '@mui/material';
import { Event } from 'Components/Shared/Types';
import CardMediaDates from 'Components/UpcomingEvents/CardMediaDates';
import CardMediaDaysLeft from 'Components/UpcomingEvents/CardMediaDaysLeft';
import easterImage from 'Assets/easter.webp';
import summerImage from 'Assets/summer.jpg';

type CardMediaContentProps = {
  event: Event;
};

const CardMediaContent: FC<CardMediaContentProps> = ({ event }) => {
  const today = new Date();
  const diffInMs = event.dateFrom.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  return (
    <Stack sx={{ position: 'static' }}>
      <Stack
        sx={{
          backgroundImage: `url(${event.type === 'Summer' ? summerImage : easterImage})`,
          height: '300px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 44%',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          }}
        >
          <CardMediaDaysLeft daysLeft={diffInDays} />
          <Stack alignItems="flex-end">
            <CardMediaDates dateFrom={event.dateFrom} dateTo={event.dateTo} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardMediaContent;
