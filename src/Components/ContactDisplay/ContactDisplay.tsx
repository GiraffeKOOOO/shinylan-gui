import { FC } from 'react';
import { Grid2 as Grid, Stack, Typography } from '@mui/material';
import Colours from 'Components/Shared/Colours';
import contactImage from 'Assets/contact-image.png';
import ContactInfo from 'Components/ContactDisplay/ContactInfo';

type ContactDisplayProps = {
  darkMode: boolean;
};

const ContactDisplay: FC<ContactDisplayProps> = ({ darkMode }) => {
  return (
    <Grid container sx={{ marginTop: '1rem', marginBottom: '2rem' }}>
      {/* Padding left */}
      <Grid size={3} />

      {/* center column - main content */}
      <Grid size={8}>
        {/* Title */}
        <Stack direction="column">
          <Grid container>
            <Grid size={9}>
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
                Contact
              </Typography>
            </Grid>
            <Grid size={3} />
          </Grid>

          {/* contact background + info */}
          <Stack direction="column" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
            <Stack sx={{ position: 'static' }}>
              <Stack
                sx={{
                  backgroundImage: `url(${contactImage})`,
                  height: `calc(100vh - 300px)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'x-end',
                }}
              >
                <ContactInfo darkMode={darkMode} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Grid>

      {/* Padding right */}
      <Grid size={1} />
    </Grid>
  );
};

export default ContactDisplay;
