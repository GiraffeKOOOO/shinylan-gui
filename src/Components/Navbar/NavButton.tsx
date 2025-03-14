import { FC } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useDarkMode } from 'Context/useDarkMode';
import LocationSwitch from 'Components/Navbar/LocationSwitch';
import Colours from 'Components/Shared/Colours';

type ButtonProps = {
  isMobile: boolean;
  buttonName: string;
};

const NavButton: FC<ButtonProps> = ({ isMobile, buttonName }) => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  //  TODO: pick this up when working on mobile
  if (isMobile)
    return (
      //   <ListItem disablePadding sx={{ my: '0.5rem' }}>
      //     <ListItemButton
      //       onClick={() => locationSwitch(buttonName)}
      //       sx={{
      //         textAlign: 'center',
      //         color: darkMode ? Colours.darkText : Colours.lightText,
      //         borderRadius: '0.375rem',
      //         mx: '0.5rem',
      //         // '&:hover': {
      //         //   backgroundColor: darkMode
      //         //     ? COLOURS.DARK_BUTTON_HOVER_BACKGROUND
      //         //     : COLOURS.DARK_TABLE_FONT,
      //         //   color: darkMode ? COLOURS.DARK_FONT_PRIMARY : COLOURS.LIGHT_FONT_PRIMARY,
      //         // },
      //         '&:focus': {
      //           backgroundColor: Colours.transparent,
      //           border: `2px, solid black`,
      //         },
      //       }}
      //     >
      //       <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{buttonName}</Typography>
      //     </ListItemButton>
      //   </ListItem>
      <></>
    );

  return (
    <Button
      variant="text"
      disableRipple
      sx={{
        backgroundColor: Colours.transparent,
        border: Colours.transparent,
        color: darkMode ? Colours.darkText : Colours.lightText,
        textTransform: 'none',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        fontWeight: '500',
        paddingY: '0.5rem',
        paddingX: '0.75rem',
        textSizeAdjust: '100%',
        marginLeft: '1rem',
        transition: 'all 0s',
        '&:hover': {
          backgroundColor: darkMode ? Colours.darkNavButtonHover : Colours.lightNavButtonHover,
          color: darkMode ? Colours.darkText : Colours.lightText,
          border: 'none',
        },
      }}
      onClick={() => LocationSwitch(buttonName, navigate)}
    >
      {buttonName}
    </Button>
  );
};

export default NavButton;
