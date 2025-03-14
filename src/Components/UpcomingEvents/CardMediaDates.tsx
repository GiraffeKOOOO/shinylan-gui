import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Colours from 'Components/Shared/Colours';

type CardMediaDatesProps = {
  dateFrom: Date;
  dateTo: Date;
};

const CardMediaDates: FC<CardMediaDatesProps> = ({ dateFrom, dateTo }) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat('en-GB', {
      weekday: 'long', // "Friday"
      day: 'numeric', // "7"
      month: 'long', // "April"
      year: 'numeric', // "2025"
    }).format(date);

  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: Colours.cardMediaDaysLeftBackground,
        padding: '0.2rem',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography sx={{ marginLeft: '0.2rem', marginRight: '0.2rem' }}>
        {formatDate(dateFrom)} → {formatDate(dateTo)}
      </Typography>
      <CalendarMonthIcon sx={{ fontSize: '1.2rem' }} />
    </Stack>
  );
};

export default CardMediaDates;
