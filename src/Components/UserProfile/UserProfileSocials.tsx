import { FC } from 'react';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { User } from 'Components/Shared/Types';
import Colours from 'Components/Shared/Colours';

type UserProfileSocialsProps = {
  darkMode: boolean;
  user: User;
};

const UserProfileSocials: FC<UserProfileSocialsProps> = ({ darkMode, user }) => {
  return (
    <Card
      sx={{
        width: 350,

        backgroundColor: darkMode ? Colours.darkBackgroundFooter : Colours.lightBackgroundFooter,
        border: `1px solid ${darkMode ? Colours.darkText : Colours.transparent}`,
        borderRadius: '15px',
        marginBottom: '2rem',
      }}
    >
      <CardContent>
        <Typography
          sx={{
            color: darkMode ? Colours.darkText : Colours.lightText,
            fontSize: '1.5rem',
            letterSpacing: '-1.5px',
            fontFamily: 'Varela Round',
            marginBottom: '0.5rem',
          }}
        >
          Social Integrations
        </Typography>
        <Stack textAlign="left">
          <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
            Discord: {user.socials.discord ? 'Connected' : 'Not Connected'}
          </Typography>
          <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
            Steam: {user.socials.steam ? 'Connected' : 'Not Connected'}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserProfileSocials;
