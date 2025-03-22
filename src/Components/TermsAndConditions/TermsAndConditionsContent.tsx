import { FC } from 'react';
import { Grid2 as Grid, Stack, Typography } from '@mui/material';
import Colours from 'Components/Shared/Colours';
import PrivacyPolicyText from 'Components/TermsAndConditions/TermsAndConditionsText';

type TermsAndConditionsContentProps = {
  darkMode: boolean;
};

const TermsAndConditionsContent: FC<TermsAndConditionsContentProps> = ({ darkMode }) => {
  return (
    <Grid container sx={{ marginTop: '1rem', marginBottom: '4rem' }}>
      {/* Padding left */}
      <Grid size={2} />

      {/* center column - main content */}
      <Grid size={8}>
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
            ShinyLAN Terms and Conditions
          </Typography>
          {/* main content */}
          <Stack direction="column" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
            <PrivacyPolicyText darkMode={darkMode} />
          </Stack>
        </Stack>
      </Grid>

      {/* Padding right */}
      <Grid size={2} />
    </Grid>
  );
};

export default TermsAndConditionsContent;
