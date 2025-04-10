import { FC } from 'react';
import { Grid2 as Grid, Stack, Typography } from '@mui/material';
import { User } from 'Components/Shared/Types';
import Colours from 'Components/Shared/Colours';
import UserProfileCard from 'Components/UserProfile/UserProfileCard';
import UserSections from 'Components/UserProfile/UserSections';

type UserProfileProps = {
  darkMode: boolean;
  user: User;
};

const UserProfile: FC<UserProfileProps> = ({ darkMode, user }) => {
  return (
    <Grid container sx={{ marginTop: '1rem', marginBottom: '3rem' }}>
      {/* Padding left */}
      <Grid size={1} />

      {/* center column - main content */}
      <Grid size={10}>
        {/* Title */}
        <Stack direction="column">
          <Typography
            sx={{
              color: darkMode ? Colours.darkText : Colours.lightText,
              fontSize: {
                xs: '1.4rem',
                sm: '2rem',
                lg: '2.5rem',
              },
              letterSpacing: '-1.5px',
              fontFamily: 'Varela Round',
            }}
          >
            Your Account
          </Typography>
          {/* List of gallery folders */}
          <Grid container spacing={10} justifyContent="center" sx={{ marginTop: '2rem' }}>
            {/* main content here */}
            <UserProfileCard darkMode={darkMode} user={user} />
            <UserSections darkMode={darkMode} user={user} />
          </Grid>
        </Stack>
      </Grid>

      {/* Padding right */}
      <Grid size={1} />
    </Grid>
  );
};

export default UserProfile;
