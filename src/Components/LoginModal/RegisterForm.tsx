import { FC } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { SetterOrUpdater } from 'recoil';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Colours from 'Components/Shared/Colours';

type RegisterFormProps = {
  darkMode: boolean;
  setRegisterModal: SetterOrUpdater<boolean>;
};

const RegisterForm: FC<RegisterFormProps> = ({ darkMode, setRegisterModal }) => {
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
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Stack direction="column" sx={{ marginX: 'auto' }}>
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
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack
              direction="column"
              spacing={2}
              sx={{ marginX: 'auto', marginTop: '1rem', width: '250px' }}
            >
              <TextField
                variant="outlined"
                label="Username"
                name="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
                helperText={errors.userName && touched.userName ? errors.userName : ''}
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '0.6rem',
                  },
                  '& .MuiInputLabel-root': {
                    marginTop: '-0.3rem',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: darkMode ? Colours.darkText : Colours.titleOrange,
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? Colours.darkText : Colours.titleOrange,
                  },
                }}
              />
              <TextField
                variant="outlined"
                label="First Name"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                helperText={errors.firstName && touched.firstName ? errors.firstName : ''}
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '0.6rem',
                  },
                  '& .MuiInputLabel-root': {
                    marginTop: '-0.3rem',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: darkMode ? Colours.darkText : Colours.titleOrange,
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? Colours.darkText : Colours.titleOrange,
                  },
                }}
              />
              <TextField
                variant="outlined"
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                helperText={errors.lastName && touched.lastName ? errors.lastName : ''}
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '0.6rem',
                  },
                  '& .MuiInputLabel-root': {
                    marginTop: '-0.3rem',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: darkMode ? Colours.darkText : Colours.titleOrange,
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? Colours.darkText : Colours.titleOrange,
                  },
                }}
              />
              <TextField
                variant="outlined"
                label="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                helperText={errors.email && touched.email ? errors.email : ''}
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '0.6rem',
                  },
                  '& .MuiInputLabel-root': {
                    marginTop: '-0.3rem',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: darkMode ? Colours.darkText : Colours.titleOrange,
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? Colours.darkText : Colours.titleOrange,
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
                helperText={errors.userName && touched.userName ? errors.userName : ''}
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '0.6rem',
                  },
                  '& .MuiInputLabel-root': {
                    marginTop: '-0.3rem',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: darkMode ? Colours.darkText : Colours.titleOrange,
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? Colours.darkText : Colours.titleOrange,
                  },
                }}
              />
              <TextField
                variant="outlined"
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                helperText={
                  errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ''
                }
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '0.6rem',
                  },
                  '& .MuiInputLabel-root': {
                    marginTop: '-0.3rem',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: darkMode ? Colours.darkText : Colours.titleOrange,
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: darkMode ? Colours.darkText : Colours.titleOrange,
                  },
                }}
              />
              <FormGroup>
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="I agree to the Terms & Conditions"
                />
                <FormControlLabel control={<Checkbox />} label="Subscribe to mailing list" />
              </FormGroup>
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                endIcon={<PersonAddAlt1Icon />}
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
                Sign Up
              </Button>
              <Button
                variant="text"
                sx={{
                  color: darkMode ? Colours.darkText : Colours.lightText,
                  textDecorationColor: Colours.titleOrange,
                  textTransform: 'none',
                  paddingX: '0.8rem',
                }}
                onClick={() => setRegisterModal(false)}
              >
                Already have an account? Log In
              </Button>
            </Stack>
          </form>
        </Stack>
      )}
    </Formik>
  );
};

export default RegisterForm;
