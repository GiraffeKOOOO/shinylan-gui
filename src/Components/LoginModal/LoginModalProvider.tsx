import { FC } from 'react';
import { Box, Modal } from '@mui/material';
import { useRecoilState } from 'recoil';
import {
  loginModalState,
  registerModalState,
  forgottenPasswordModalState,
  OVERRIDE,
} from './LoginModalState';
import LoginModal from 'Components/LoginModal/LoginModal';
import RegisterModal from 'Components/LoginModal/RegisterModal';
import Colours from 'Components/Shared/Colours';

type LoginModalProviderProps = {
  darkMode: boolean;
};

const LoginModalProvider: FC<LoginModalProviderProps> = ({ darkMode }) => {
  const [loginModal, setLoginModal] = useRecoilState(loginModalState);
  const [registerModal, setRegisterModal] = useRecoilState(registerModalState);
  const [forgottenPasswordModal, setForgottenPasswordModal] = useRecoilState(
    forgottenPasswordModalState,
  );
  // TODO: remove this when there is a backend fetching user data
  const [, setOverride] = useRecoilState(OVERRIDE);

  return (
    <>
      <Modal
        open={loginModal}
        onClose={() => {
          setForgottenPasswordModal(false);
          setRegisterModal(false);
          setLoginModal(false);
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            height: registerModal ? 700 : 500,
            backgroundColor: darkMode ? Colours.darkBackgroundFooter : Colours.lightBackground,
            borderRadius: '20px',
            boxShadow: 24,
          }}
        >
          {registerModal ? (
            <RegisterModal
              darkMode={darkMode}
              setLoginModal={setLoginModal}
              setRegisterModal={setRegisterModal}
            />
          ) : (
            <LoginModal
              darkMode={darkMode}
              setLoginModal={setLoginModal}
              setRegisterModal={setRegisterModal}
              forgottenPasswordModal={forgottenPasswordModal}
              setForgottenPasswordModal={setForgottenPasswordModal}
              setOverride={setOverride}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default LoginModalProvider;
