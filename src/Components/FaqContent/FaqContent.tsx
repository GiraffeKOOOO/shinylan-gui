import { FC } from 'react';
import { Grid2 as Grid, Stack, Typography } from '@mui/material';
import StaffProfiles from 'Components/FaqContent/StaffProfiles';
import Colours from 'Components/Shared/Colours';
import { MockStaff } from '../../../MockData';

type FaqContentProps = {
  darkMode: boolean;
};

const FaqContent: FC<FaqContentProps> = ({ darkMode }) => {
  return (
    <Grid container sx={{ marginTop: '1rem', marginBottom: '4rem' }}>
      {/* Padding left */}
      <Grid size={1} />

      {/* center column - main content */}
      <Grid size={10}>
        {/* Title */}
        <Stack direction="column">
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
            FAQ
          </Typography>
          {/* main content */}
          <Stack direction="row" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
            {/* <AboutSection />
            <FaqSection />
            <VenueInfo /> */}
            <StaffProfiles staff={MockStaff} />
          </Stack>
        </Stack>
      </Grid>

      {/* Padding right */}
      <Grid size={1} />
    </Grid>
  );
};

export default FaqContent;
