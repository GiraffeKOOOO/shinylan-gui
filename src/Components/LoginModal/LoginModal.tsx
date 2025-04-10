import { FC } from 'react';
import { IconButton, Stack } from '@mui/material';
import { SetterOrUpdater } from 'recoil';
import CancelIcon from '@mui/icons-material/Cancel';
import LoginForm from 'Components/LoginModal/LoginForm';
import ForgottenPasswordModal from 'Components/LoginModal/ForgottenPasswordModal';
import slBannerLight from 'Assets/sl-banner-light.png';
import Colours from 'Components/Shared/Colours';

type LoginModalProps = {
  darkMode: boolean;
  forgottenPasswordModal?: boolean;
  setLoginModal: SetterOrUpdater<boolean>;
  setRegisterModal: SetterOrUpdater<boolean>;
  setForgottenPasswordModal: SetterOrUpdater<boolean>;
  setOverride: SetterOrUpdater<boolean>;
};

const LoginModal: FC<LoginModalProps> = ({
  darkMode,
  forgottenPasswordModal,
  setLoginModal,
  setRegisterModal,
  setForgottenPasswordModal,
  setOverride,
}) => {
  return (
    <Stack direction="column">
      {/* logo column */}
      <Stack direction="row" justifyContent="center" sx={{ margin: 'auto', flexGrow: 1 }}>
        <Stack
          sx={{
            backgroundColor: Colours.titleOrange,
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
            marginX: 'auto',
            width: '300px',
            height: '500px',
          }}
        >
          <img src={slBannerLight} width={250} height={60} style={{ margin: 'auto' }} />
        </Stack>
        {/* form column */}
        <Stack direction="column" sx={{ width: '400px' }}>
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
            <ForgottenPasswordModal
              darkMode={darkMode}
              setForgottenPasswordModal={setForgottenPasswordModal}
            />
          ) : (
            <LoginForm
              darkMode={darkMode}
              setRegisterModal={setRegisterModal}
              setForgottenPasswordModal={setForgottenPasswordModal}
              setOverride={setOverride}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoginModal;
