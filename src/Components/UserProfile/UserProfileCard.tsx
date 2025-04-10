import { FC } from 'react';
import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';
import { User } from 'Components/Shared/Types';
import slLogo from 'Assets/sl.jpg';
import Colours from 'Components/Shared/Colours';

type UserProfileCardProps = {
  darkMode: boolean;
  user: User;
};

const UserProfileCard: FC<UserProfileCardProps> = ({ darkMode, user }) => {
  return (
    <Card
      sx={{
        width: 350,
        height: 350,
        backgroundColor: darkMode ? Colours.darkBackgroundFooter : Colours.lightBackgroundFooter,
        border: `1px solid ${darkMode ? Colours.darkText : Colours.transparent}`,
        borderRadius: '15px',
        marginBottom: '2rem',
      }}
    >
      <Avatar
        alt="user avatar"
        src={slLogo}
        sx={{
          width: 150,
          height: 150,
          border: `1px solid ${darkMode ? Colours.darkText : Colours.lightText}`,
          marginX: 'auto',
          marginTop: '1rem',
        }}
      />
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
          {user.userName}
        </Typography>
        <Stack textAlign="left">
          <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
            Name: {user.firstName} {user.lastName}
          </Typography>
          <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
            Member since: {user.createdAt.toDateString()}
          </Typography>
          <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
            Events attend: {user.eventHistory.length}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
