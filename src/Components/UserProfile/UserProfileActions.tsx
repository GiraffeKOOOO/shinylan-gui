import { FC } from 'react';
import { Button, Stack } from '@mui/material';
import { User } from 'Components/Shared/Types';
import LogoutIcon from '@mui/icons-material/Logout';
import Colours from 'Components/Shared/Colours';

type UserProfileActionsProps = {
  darkMode: boolean;
  user: User;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserProfileActions: FC<UserProfileActionsProps> = ({ darkMode, user }) => {
  return (
    <Stack direction={'column'} spacing={4} alignItems="center">
      <Button
        variant="contained"
        type="submit"
        endIcon={<LogoutIcon />}
        sx={{
          width: '15rem',
          border: `1px solid ${Colours.titleOrange}`,
          borderRadius: '20px',
          color: Colours.darkText,
          backgroundColor: Colours.titleOrange,
          textDecorationColor: Colours.titleOrange,
          textTransform: 'none',
          paddingX: '0.8rem',
        }}
        onClick={() => {
          // Handle logout logic here
          console.log('Logging out...');
        }}
      >
        Log Out
      </Button>
    </Stack>
  );
};

export default UserProfileActions;
