import { FC } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { Pages } from 'Components/Shared/Types';
import LocationSwitch from 'Components/Navbar/LocationSwitch';
import Colours from 'Components/Shared/Colours';

type FooterButtonProps = {
  darkMode: boolean;
  page: Pages;
};

const FooterButton: FC<FooterButtonProps> = ({ darkMode, page }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="text"
      disableRipple
      sx={{
        backgroundColor: Colours.transparent,
        border: Colours.transparent,
        color: darkMode ? Colours.darkTextHover : Colours.lightTextHover,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: Colours.transparent,
          color: darkMode ? Colours.darkText : Colours.lightText,
        },
      }}
      onClick={() => LocationSwitch(page, navigate)}
    >
      {page}
    </Button>
  );
};

export default FooterButton;
