import { FC } from 'react';
import { SetterOrUpdater } from 'recoil';
import { Button, Stack, TextField, Typography } from '@mui/material';
import MailLockIcon from '@mui/icons-material/MailLock';
import Colours from 'Components/Shared/Colours';

type ForgottenModalProps = {
  darkMode: boolean;
  setForgottenPasswordModal: SetterOrUpdater<boolean>;
};

const ForgottenPasswordModal: FC<ForgottenModalProps> = ({
  darkMode,
  setForgottenPasswordModal,
}) => {
  return (
    <Stack direction="column" spacing={2} sx={{ marginX: 'auto', width: '250px' }}>
      <Typography
        sx={{
          color: darkMode ? Colours.darkText : Colours.lightText,
          fontSize: {
            xs: '1.4rem',
            sm: '2rem',
            lg: '2.5rem',
          },
          letterSpacing: '-1.5px',
          fontFamily: 'Varela Round',
        }}
      >
        Forgotten Password
      </Typography>
      <Typography>Please enter your email address to reset your password</Typography>
      <TextField
        variant="outlined"
        label="Email"
        name="email"
        sx={{
          '& .MuiInputLabel-root.Mui-focused': {
            color: darkMode ? Colours.darkText : Colours.titleOrange,
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: darkMode ? Colours.darkText : Colours.titleOrange,
          },
        }}
      />
      <Button
        variant="contained"
        type="submit"
        endIcon={<MailLockIcon />}
        sx={{
          border: `1px solid ${Colours.titleOrange}`,
          borderRadius: '20px',
          color: Colours.darkText,
          backgroundColor: Colours.titleOrange,
          textDecorationColor: Colours.titleOrange,
          textTransform: 'none',
          paddingX: '0.8rem',
        }}
      >
        Reset Password
      </Button>
      <Button
        variant="text"
        sx={{
          border: `1px solid ${Colours.titleOrange}`,
          borderRadius: '20px',
          color: darkMode ? Colours.darkText : Colours.titleOrange,
          textDecorationColor: Colours.titleOrange,
          textTransform: 'none',
          paddingX: '0.8rem',
        }}
        onClick={() => setForgottenPasswordModal(false)}
      >
        Back to Login
      </Button>
    </Stack>
  );
};

export default ForgottenPasswordModal;
