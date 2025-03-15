import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Colours from 'Components/Shared/Colours';

type CardMediaDaysLeftProps = {
  daysLeft: number;
};

const CardMediaDaysLeft: FC<CardMediaDaysLeftProps> = ({ daysLeft }) => {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: Colours.cardMediaDaysLeftBackground,
        width: '9.2rem',
        padding: '0.2rem',
        marginLeft: '0.7rem',
        marginTop: '0.5rem',
        borderRadius: '10px',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <WatchLaterIcon sx={{ fontSize: '1.2rem' }} />
      <Typography sx={{ marginLeft: '0.2rem' }}>{daysLeft} days to go</Typography>
    </Stack>
  );
};

export default CardMediaDaysLeft;
