import { FC } from 'react';
import { Card, Divider, Stack, Typography } from '@mui/material';

type SkeletonEventHistoryCardRowProps = {
  darkMode?: boolean;
};

const SkeletonEventHistoryCardRow: FC<SkeletonEventHistoryCardRowProps> = () => {
  return (
    <Card
      sx={{
        background:
          'linear-gradient(to bottom, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)',
        border: '0',
        boxShadow: '0 0 0 0',
      }}
    >
      <Stack
        direction="row"
        sx={{
          height: '4.5rem',
          alignItems: 'center',
          paddingRight: '0.5rem',
          borderRadius: '7px',
          justifyContent: 'space-evenly',
        }}
      >
        <Stack direction="column" sx={{ marginX: '0.2rem' }} />
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack direction="column" sx={{ marginX: '0.2rem' }}>
          <Typography>Date </Typography>
          <Divider orientation="horizontal" sx={{ marginX: '0.1rem' }} />
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack direction="column" sx={{ marginX: '0.2rem' }}>
          <Typography>Venue</Typography>
          <Divider orientation="horizontal" sx={{ marginX: '0.1rem' }} />
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack direction="column" sx={{ marginX: '0.2rem' }}>
          <Typography>Attendees</Typography>
          <Divider orientation="horizontal" sx={{ marginX: '0.1rem' }} />
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack sx={{ width: '8rem' }} />
      </Stack>
    </Card>
  );
};

export default SkeletonEventHistoryCardRow;
