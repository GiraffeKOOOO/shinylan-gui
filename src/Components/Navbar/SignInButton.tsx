import { FC } from 'react';
import { Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { loginModalState } from 'Components/LoginModal/LoginModalState';
import Colours from 'Components/Shared/Colours';

type SignInButtonProps = {
  darkMode: boolean;
};

const SignInButton: FC<SignInButtonProps> = ({ darkMode }) => {
  const [, setLoginModal] = useRecoilState(loginModalState);

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
      onClick={() => setLoginModal(true)}
    >
      Sign in
    </Button>
  );
};

export default SignInButton;
