import { FC } from 'react';
import { IconButton, Stack } from '@mui/material';
import { SetterOrUpdater } from 'recoil';
import CancelIcon from '@mui/icons-material/Cancel';
import RegisterForm from 'Components/LoginModal/RegisterForm';
import Colours from 'Components/Shared/Colours';
import shinyLogo from 'Assets/sl-banner.png';

type RegisterModalProps = {
  darkMode: boolean;
  setLoginModal: SetterOrUpdater<boolean>;
  setRegisterModal: SetterOrUpdater<boolean>;
};

const RegisterModal: FC<RegisterModalProps> = ({ darkMode, setLoginModal, setRegisterModal }) => {
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
            height: '700px',
          }}
        >
          <img src={shinyLogo} width={250} height={60} style={{ margin: 'auto' }} />
        </Stack>
        {/* form column */}
        <Stack direction="column" sx={{ width: '400px' }}>
          <Stack
            alignItems="flex-end"
            sx={{
              paddingX: '1rem',
              paddingTop: '1rem',
              paddingBottom: '0',
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
                setRegisterModal(false);
                setLoginModal(false);
              }}
            >
              <CancelIcon sx={{ fontSize: '1.5rem' }} />
            </IconButton>
          </Stack>
          <RegisterForm
            darkMode={darkMode}
            setLoginModal={setLoginModal}
            setRegisterModal={setRegisterModal}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RegisterModal;
