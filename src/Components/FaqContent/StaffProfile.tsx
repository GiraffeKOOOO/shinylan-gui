import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { Staff } from 'Components/Shared/Types';
import staffImage from 'Assets/staff-3.png';

type StaffProfileProps = {
  staffMember: Staff;
};

const StaffProfile: FC<StaffProfileProps> = ({ staffMember }) => {
  return (
    <Stack direction="column" sx={{ marginX: '3rem' }}>
      <img
        src={staffImage}
        style={{
          width: '300px',
          height: '400px',
        }}
      />
      <Stack direction="column">
        <Typography
          sx={{
            fontSize: {
              xs: '1.4rem',
              sm: '2rem',
              lg: '2.5rem',
            },
            maxWidth: '300px',
            letterSpacing: '-1.5px',
            fontFamily: 'Varela Round',
          }}
          textAlign="left"
        >
          {staffMember.userName}
        </Typography>
        <Typography sx={{ maxWidth: '300px' }} textAlign="left">
          {staffMember.description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default StaffProfile;
