import { FC } from 'react';
import { Stack } from '@mui/material';
import { Staff } from 'Components/Shared/Types';
import StaffProfile from 'Components/AboutContent/StaffProfile';

type StaffProfilesProps = {
  darkMode: boolean;
  staff: Staff[];
};

const StaffProfiles: FC<StaffProfilesProps> = ({ darkMode, staff }) => {
  return (
    <Stack direction="row" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
      <Stack direction="row">
        {staff.map((staffMember, iterator) => {
          return <StaffProfile darkMode={darkMode} staffMember={staffMember} key={iterator} />;
        })}
      </Stack>
    </Stack>
  );
};

export default StaffProfiles;
