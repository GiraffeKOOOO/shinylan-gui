import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { Staff } from 'Components/Shared/Types';
import staffImage from 'Assets/staff-3.png';
import Colours from 'Components/Shared/Colours';

type StaffProfileProps = {
  darkMode: boolean;
  staffMember: Staff;
};

const StaffProfile: FC<StaffProfileProps> = ({ darkMode, staffMember }) => {
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
            color: darkMode ? Colours.darkText : Colours.lightText,
          }}
          textAlign="left"
        >
          {staffMember.userName}
        </Typography>
        <Typography
          sx={{ maxWidth: '300px', color: darkMode ? Colours.darkText : Colours.lightText }}
          textAlign="left"
        >
          {staffMember.description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default StaffProfile;
