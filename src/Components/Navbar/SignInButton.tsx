import { Button } from '@mui/material';
import Colours from 'Components/Shared/Colours';
import { FC } from 'react';

type SignInButtonProps = {
  darkMode: boolean;
};

const SignInButton: FC<SignInButtonProps> = ({ darkMode }) => {
  return (
    <Button
      variant="text"
      disableRipple
      sx={{
        backgroundColor: Colours.transparent,
        border: Colours.transparent,
        color: darkMode ? Colours.darkTextHover : Colours.lightTextHover,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: Colours.transparent,
          color: darkMode ? Colours.darkText : Colours.lightText,
        },
      }}
      onClick={() => {}}
    >
      Sign in
    </Button>
  );
};

export default SignInButton;
