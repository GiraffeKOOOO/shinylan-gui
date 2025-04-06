import { FC } from 'react';
import { Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { loginModalState, registerModalState } from '../LoginModal/LoginModalState';
import Colours from 'Components/Shared/Colours';

const SignUpButton: FC = () => {
  const [, setLoginModal] = useRecoilState(loginModalState);
  const [, setRegisterModal] = useRecoilState(registerModalState);

  return (
    <Button
      variant="contained"
      sx={{
        border: `1px solid ${Colours.titleOrange}`,
        borderRadius: '20px',
        color: Colours.darkText,
        backgroundColor: Colours.titleOrange,
        textDecorationColor: Colours.titleOrange,
        textTransform: 'none',
        paddingX: '0.8rem',
      }}
      onClick={() => {
        setRegisterModal(true);
        setLoginModal(true);
      }}
    >
      Sign up
    </Button>
  );
};

export default SignUpButton;
