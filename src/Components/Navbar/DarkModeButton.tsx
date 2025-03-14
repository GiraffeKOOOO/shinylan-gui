import { FC } from 'react';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDarkMode } from 'Context/useDarkMode';
import Colours from 'Components/Shared/Colours';

const DarkModeButton: FC = () => {
  const { darkMode, enableDarkMode, disableDarkMode } = useDarkMode();

  return (
    <IconButton
      onClick={darkMode ? disableDarkMode : enableDarkMode}
      sx={{ '&:focus': { outline: 'none' } }}
      disableRipple
    >
      {darkMode ? (
        <LightModeIcon
          sx={{
            color: Colours.lightModeButtonColour,
            '&:hover': {
              color: Colours.lightBackground,
            },
          }}
        />
      ) : (
        <DarkModeIcon
          sx={{
            color: Colours.darkModeButtonColour,
            '&:hover': {
              color: Colours.lightText,
            },
          }}
        />
      )}
    </IconButton>
  );
};

export default DarkModeButton;
