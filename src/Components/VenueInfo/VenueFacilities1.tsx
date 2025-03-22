import { FC } from 'react';
import { Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BiSolidFridge } from 'react-icons/bi';
import { PiOvenFill } from 'react-icons/pi';
import { BsBadgeWcFill } from 'react-icons/bs';
import { TbAirConditioning } from 'react-icons/tb';
import VenueFacility from 'Components/VenueInfo/VenueFacility';

type VenueFacilitiesProps = {
  darkMode: boolean;
};

const VenueFacilities: FC<VenueFacilitiesProps> = ({ darkMode }) => {
  return (
    <Stack>
      <VenueFacility
        darkMode={darkMode}
        icon={<LocationOnIcon style={{ fontSize: '1.5rem' }} />}
        facility="Kettle Bridge Lane, Cerne Abbas, DORCHESTER, Dorset, DT2 7GY"
      />
      <VenueFacility
        darkMode={darkMode}
        icon={<BiSolidFridge style={{ fontSize: '1.5rem' }} />}
        facility="two fridges"
      />
      <VenueFacility
        darkMode={darkMode}
        icon={<PiOvenFill style={{ fontSize: '1.5rem' }} />}
        facility="oven with hobs"
      />
      <VenueFacility
        darkMode={darkMode}
        icon={<BsBadgeWcFill style={{ fontSize: '1.5rem' }} />}
        facility="Mens, Womens, Disabled"
      />
      <VenueFacility
        darkMode={darkMode}
        icon={<TbAirConditioning style={{ fontSize: '1.5rem' }} />}
        facility="Air Conditioning in the side room"
      />
    </Stack>
  );
};

export default VenueFacilities;
