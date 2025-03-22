import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { PiHouseLineDuotone } from 'react-icons/pi';
import { Venue } from 'Components/Shared/Types';
import hallImage from 'Assets/hall-1.jpg';
import Colours from 'Components/Shared/Colours';

type VenuCardProps = {
  darkMode: boolean;
  venue: Venue;
  openImageViewer: (index: number) => void;
};

const VenueCard: FC<VenuCardProps> = ({ darkMode, venue, openImageViewer }) => {
  return (
    <Stack
      sx={{
        backgroundColor: darkMode ? Colours.darkBackgroundFooter : Colours.lightBackgroundFooter,
        width: '30rem',
        borderRadius: '10px',
      }}
    >
      <Stack
        sx={{
          margin: 'auto',
          alignItems: 'center',
          color: darkMode ? Colours.darkText : Colours.lightText,
        }}
      >
        <PiHouseLineDuotone style={{ fontSize: '2rem' }} />
        <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
          {venue.name}
        </Typography>
        <img
          width={350}
          height={250}
          src={hallImage}
          style={{ cursor: 'pointer' }}
          onClick={() => openImageViewer(0)}
        />
      </Stack>
    </Stack>
  );
};

export default VenueCard;
