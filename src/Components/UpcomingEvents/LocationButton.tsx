import { FC } from 'react';
import { Button } from '@mui/material';
import { Venue } from 'Components/Shared/Types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Colours from 'Components/Shared/Colours';

type LocationButtonProps = {
  darkMode: boolean;
  venue: Venue;
};

const LocationButton: FC<LocationButtonProps> = ({ venue }) => {
  return (
    <Button
      variant="outlined"
      startIcon={<LocationOnIcon />}
      sx={{
        border: `1px solid ${Colours.titleOrange}`,
        color: Colours.titleOrange,
        textDecorationColor: Colours.titleOrange,
        textTransform: 'none',
      }}
      onClick={() => window.open(`${venue.googleMaps}`, '_blank', 'noopener,noreferrer')}
    >
      {venue.name}
    </Button>
  );
};

export default LocationButton;
