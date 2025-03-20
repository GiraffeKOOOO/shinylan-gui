import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { Staff } from 'Components/Shared/Types';
import StaffProfile from 'Components/FaqContent/StaffProfile';

type StaffProfilesProps = {
  staff: Staff[];
};

const StaffProfiles: FC<StaffProfilesProps> = ({ staff }) => {
  return (
    <Stack direction="row">
      <Typography></Typography>
      {staff.map((staffMember, iterator) => {
        return <StaffProfile staffMember={staffMember} key={iterator} />;
      })}
    </Stack>
  );
};

export default StaffProfiles;
