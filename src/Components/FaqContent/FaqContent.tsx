import { FC } from 'react';
import { Grid2 as Grid, Stack, Typography } from '@mui/material';
import VenueInfo from 'Components/VenueInfo/VenueInfo';
import Colours from 'Components/Shared/Colours';
import { MockCerneAbbas } from '../../../MockData';
import FaqSection from 'Components/FaqContent/FaqSection';

type FaqContentProps = {
  darkMode: boolean;
};

const FaqContent: FC<FaqContentProps> = ({ darkMode }) => {
  return (
    <Grid container sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
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
            Frequently Asked Questions
          </Typography>
          {/* main content */}
          <Stack direction="column" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
            <FaqSection darkMode={darkMode} />
            <VenueInfo darkMode={darkMode} venue={MockCerneAbbas} />
          </Stack>
        </Stack>
      </Grid>

      {/* Padding right */}
      <Grid size={1} />
    </Grid>
  );
};

export default FaqContent;
