import { FC, ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';
import Colours from 'Components/Shared/Colours';

type VenueFacilityProps = {
  darkMode: boolean;
  facility: string;
  icon: ReactNode;
};

const VenueFacility: FC<VenueFacilityProps> = ({ darkMode, facility, icon }) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{
        backgroundColor: darkMode ? Colours.darkBackgroundFooter : Colours.lightBackgroundFooter,
        color: darkMode ? Colours.darkText : Colours.lightText,
        borderRadius: '5px',
        padding: '0.5rem',
        marginY: '0.5rem',
      }}
    >
      {icon}
      <Typography sx={{ marginY: 'auto', color: darkMode ? Colours.darkText : Colours.lightText }}>
        {facility}
      </Typography>
    </Stack>
  );
};

export default VenueFacility;
