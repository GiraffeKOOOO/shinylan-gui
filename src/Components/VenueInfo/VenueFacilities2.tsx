import { FC } from 'react';
import { Stack } from '@mui/material';
import Icon from '@mdi/react';
import { FaBed, FaParking } from 'react-icons/fa';
import { MdMicrowave } from 'react-icons/md';
import { mdiKettle } from '@mdi/js';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import VenueFacility from 'Components/VenueInfo/VenueFacility';

type VenueFacilitiesProps = {
  darkMode: boolean;
};

const VenueFacilities: FC<VenueFacilitiesProps> = ({ darkMode }) => {
  return (
    <Stack>
      <VenueFacility
        darkMode={darkMode}
        icon={<FaParking style={{ fontSize: '1.5rem' }} />}
        facility="Free parking available outside the hall"
      />
      <VenueFacility
        darkMode={darkMode}
        icon={<MdMicrowave style={{ fontSize: '1.5rem' }} />}
        facility="microwave"
      />
      <VenueFacility
        darkMode={darkMode}
        icon={<Icon path={mdiKettle} size={1} />}
        facility="kettle"
      />
      <VenueFacility
        darkMode={darkMode}
        icon={<GiForkKnifeSpoon style={{ fontSize: '1.5rem' }} />}
        facility="cutlery, plates, cups"
      />
      <VenueFacility
        darkMode={darkMode}
        icon={<FaBed style={{ fontSize: '1.5rem' }} />}
        facility="Sleeping areas: stage, main hall, side rooms"
      />
    </Stack>
  );
};

export default VenueFacilities;
