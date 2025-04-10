import { FC } from 'react';
import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { User } from 'Components/Shared/Types';
import { FaUserCircle } from 'react-icons/fa';
import CreateIcon from '@mui/icons-material/Create';
import Colours from 'Components/Shared/Colours';

type UserDetailsProps = {
  darkMode: boolean;
  user: User;
};

const UserDetails: FC<UserDetailsProps> = ({ darkMode, user }) => {
  return (
    <Card
      sx={{
        width: '600px',
        backgroundColor: darkMode ? Colours.darkBackgroundFooter : Colours.lightBackgroundFooter,
        border: `1px solid ${darkMode ? Colours.darkText : Colours.transparent}`,
        borderRadius: '15px',
      }}
    >
      <CardContent
        sx={{
          paddingBottom: '0.2rem !important',
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ marginBottom: '0.5rem' }}
        >
          <Typography
            sx={{
              color: darkMode ? Colours.darkText : Colours.lightText,
              fontSize: '1.5rem',
              letterSpacing: '-1.5px',
              fontFamily: 'Varela Round',
            }}
          >
            User Details
          </Typography>
          <FaUserCircle
            size={25}
            style={{ color: darkMode ? Colours.darkText : Colours.lightText, marginTop: '-0.3rem' }}
          />
        </Stack>
        <Stack direction="row" spacing={6}>
          <Stack textAlign="left">
            <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
              First Name: {user.firstName}
            </Typography>
            <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
              Last Name: {user.lastName}
            </Typography>
            <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
              Subscribed for newsletter: {user.newsLetter ? 'Yes' : 'No'}
            </Typography>
          </Stack>
          <Stack textAlign="left">
            <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
              Email: {user.email}
            </Typography>
            {user.phoneNumber && (
              <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
                Contact number: {user.phoneNumber}
              </Typography>
            )}
            <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
              Password: •••••••••
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems="flex-end" sx={{ marginTop: '0.5rem' }}>
          <Button
            variant="text"
            endIcon={<CreateIcon />}
            sx={{
              width: '150px',
              color: darkMode ? Colours.darkText : Colours.lightText,
              textDecorationColor: Colours.titleOrange,
              textTransform: 'none',
            }}
            // onClick={() => goToEditDetails(false)}
          >
            Edit your details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserDetails;
