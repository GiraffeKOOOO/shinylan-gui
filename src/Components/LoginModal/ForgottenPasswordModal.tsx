import { FC } from 'react';
import { SetterOrUpdater } from 'recoil';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
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
    <Formik
      initialValues={{ email: '' }}
      validate={(values) => {
        const errors: { email?: string } = {};
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // TODO: connect to backend API for login
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
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
            <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
              Please enter your email address to reset your password
            </Typography>
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              helperText={errors.email && touched.email ? errors.email : ''}
              sx={{
                '& .MuiInputLabel-root': {
                  color: darkMode ? Colours.darkText : Colours.lightText,
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: darkMode ? Colours.darkText : Colours.titleOrange,
                },
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: darkMode ? Colours.darkText : Colours.lightText,
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: darkMode ? Colours.darkText : Colours.titleOrange,
                },
                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: darkMode ? Colours.darkText : Colours.titleOrange,
                },
                '& .MuiInputBase-input': {
                  color: darkMode ? Colours.darkText : Colours.lightText,
                },
                '& .MuiFormHelperText-root': {
                  color: darkMode ? Colours.darkText : Colours.lightText,
                },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting}
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
                border: `1px solid ${darkMode ? Colours.darkText : Colours.titleOrange}`,
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
        </form>
      )}
    </Formik>
  );
};

export default ForgottenPasswordModal;
