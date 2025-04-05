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
import { useNavigate } from 'react-router';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Colours from 'Components/Shared/Colours';

type RegisterFormProps = {
  darkMode: boolean;
  setLoginModal: SetterOrUpdater<boolean>;
  setRegisterModal: SetterOrUpdater<boolean>;
};

const RegisterForm: FC<RegisterFormProps> = ({ darkMode, setLoginModal, setRegisterModal }) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false,
        mailingList: false,
      }}
      validate={(values) => {
        const errors: {
          userName?: string;
          firstName?: string;
          lastName?: string;
          email?: string;
          password?: string;
          confirmPassword?: string;
        } = {};
        if (!values.userName) {
          errors.userName = 'Username is required';
        }
        if (!values.firstName) {
          errors.firstName = 'First name is required';
        }
        if (!values.lastName) {
          errors.lastName = 'Last name is required';
        }
        if (!values.email) {
          errors.email = 'Email is required';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = 'Password confirmation is required';
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
        <Stack direction="column" sx={{ marginX: 'auto', height: '635px', overflowY: 'scroll' }}>
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
                helperText={errors.password && touched.password ? errors.password : ''}
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
                  name="termsAndConditions"
                  value={values.termsAndConditions}
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  control={
                    <Checkbox
                      sx={{
                        '&.Mui-checked': {
                          color: Colours.titleOrange,
                        },
                      }}
                    />
                  }
                  sx={{
                    '& .MuiFormControlLabel-asterisk': {
                      display: 'none',
                    },
                  }}
                  label={
                    <Typography
                      sx={{
                        color: darkMode ? Colours.darkText : Colours.lightText,
                        cursor: 'pointer',
                        fontSize: '12px',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                      onClick={() => {
                        setRegisterModal(false);
                        setLoginModal(false);
                        navigate('/terms-and-conditions');
                      }}
                    >
                      I agree to the Terms and Conditions
                    </Typography>
                  }
                />
                <FormControlLabel
                  name="mailingList"
                  value={values.mailingList}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  control={
                    <Checkbox
                      sx={{
                        '&.Mui-checked': {
                          color: Colours.titleOrange,
                        },
                      }}
                    />
                  }
                  label="Subscribe to mailing list"
                />
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
