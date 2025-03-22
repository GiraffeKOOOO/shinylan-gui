import { FC } from 'react';
import { Grid2 as Grid, Stack, Typography } from '@mui/material';
import { Staff } from 'Components/Shared/Types';
import StaffProfiles from 'Components/AboutContent/StaffProfiles';
import Colours from 'Components/Shared/Colours';
import HistoryText from 'Components/History/HistoryText';

type AboutContentProps = {
  darkMode: boolean;
  staff: Staff[];
};

const AboutContent: FC<AboutContentProps> = ({ darkMode, staff }) => {
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
            About
          </Typography>
          {/* main content */}
          <Stack direction="column" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
            <StaffProfiles darkMode={darkMode} staff={staff} />
            <HistoryText darkMode={darkMode} />
          </Stack>
        </Stack>
      </Grid>

      {/* Padding right */}
      <Grid size={1} />
    </Grid>
  );
};

export default AboutContent;
