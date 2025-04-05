import { FC } from 'react';
import { IconButton, Stack } from '@mui/material';
import { SetterOrUpdater } from 'recoil';
import CancelIcon from '@mui/icons-material/Cancel';
import Colours from 'Components/Shared/Colours';
import shinyLogo from 'Assets/sl-banner.png';
import LoginForm from 'Components/LoginModal/LoginForm';

type LoginModalProps = {
  darkMode: boolean;
  forgottenPasswordModal?: boolean;
  setLoginModal: SetterOrUpdater<boolean>;
  setRegisterModal: SetterOrUpdater<boolean>;
  setForgottenPasswordModal: SetterOrUpdater<boolean>;
};

const LoginModal: FC<LoginModalProps> = ({
  darkMode,
  forgottenPasswordModal,
  setLoginModal,
  setRegisterModal,
  setForgottenPasswordModal,
}) => {
  return (
    <Stack direction="column">
      {/* logo column */}
      <Stack direction="row" justifyContent="center" sx={{ margin: 'auto', flexGrow: 1 }}>
        <Stack
          sx={{
            backgroundColor: darkMode ? Colours.darkBackground : Colours.titleOrange,
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
            marginX: 'auto',
            width: '300px',
            height: '500px',
          }}
        >
          <img src={shinyLogo} width={250} height={60} style={{ margin: 'auto' }} />
        </Stack>
        {/* form column */}
        <Stack direction="column" sx={{ width: '300px' }}>
          <Stack
            alignItems="flex-end"
            sx={{
              padding: '1rem',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
            }}
          >
            <IconButton
              sx={{
                color: darkMode ? Colours.darkText : Colours.faqAccordionBorderGrey,
                fontSize: '2rem',
              }}
              onClick={() => {
                setForgottenPasswordModal(false);
                setLoginModal(false);
              }}
            >
              <CancelIcon sx={{ fontSize: '1.5rem' }} />
            </IconButton>
          </Stack>
          {forgottenPasswordModal ? (
            <>{/* forgotten password modal here */}</>
          ) : (
            <LoginForm
              darkMode={darkMode}
              setRegisterModal={setRegisterModal}
              setForgottenPasswordModal={setForgottenPasswordModal}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoginModal;
