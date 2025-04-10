import { FC } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import { SetterOrUpdater } from 'recoil';
import LoginIcon from '@mui/icons-material/Login';
import Colours from 'Components/Shared/Colours';

type LoginFormProps = {
  darkMode: boolean;
  setRegisterModal: SetterOrUpdater<boolean>;
  setForgottenPasswordModal: SetterOrUpdater<boolean>;
  setOverride: SetterOrUpdater<boolean>;
};

const LoginForm: FC<LoginFormProps> = ({
  darkMode,
  setRegisterModal,
  setForgottenPasswordModal,
  setOverride,
}) => {
  return (
    <Formik
      initialValues={{ userName: '', password: '' }}
      validate={(values) => {
        const errors: { userName?: string; password?: string } = {};
        if (!values.userName) {
          errors.userName = 'Username is required';
        }
        if (!values.password) {
          errors.password = 'Password is required';
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
            Log in
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack direction="column" spacing={2} sx={{ marginX: 'auto' }}>
              <TextField
                variant="outlined"
                label="Username"
                name="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
                helperText={errors.userName && touched.userName ? errors.userName : ''}
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
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                helperText={errors.password && touched.password ? errors.password : ''}
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
              {/* TODO: might need to add in a keep me logged in checkbox */}
              <Button
                variant="text"
                sx={{
                  color: darkMode ? Colours.darkText : Colours.lightText,
                  textDecorationColor: Colours.titleOrange,
                  textTransform: 'none',
                  paddingX: '0.8rem',
                }}
                onClick={() => setForgottenPasswordModal(true)}
              >
                Forgot Password?
              </Button>
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                endIcon={<LoginIcon />}
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
                Log In
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
                onClick={() => setRegisterModal(true)}
              >
                Sign Up
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
                onClick={() => setOverride(true)}
              >
                OVERRIDE
              </Button>
            </Stack>
          </form>
        </Stack>
      )}
    </Formik>
  );
};

export default LoginForm;
