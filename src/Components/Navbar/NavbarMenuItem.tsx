import { FC } from 'react';
import { MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { Pages } from 'Components/Shared/Types';
import { OVERRIDE } from 'Components/LoginModal/LoginModalState';
import LocationSwitch from 'Components/Navbar/LocationSwitch';
import Colours from 'Components/Shared/Colours';

type MenuItemProps = {
  darkMode: boolean;
  page: Pages;
};

const NavbarMenuItem: FC<MenuItemProps> = ({ darkMode, page }) => {
  const navigate = useNavigate();
  const [, setOverride] = useRecoilState(OVERRIDE);

  return (
    <MenuItem
      key={page}
      onClick={() => (page === Pages.LogOut ? setOverride(false) : LocationSwitch(page, navigate))}
      sx={{
        paddingX: '1rem',
        '&:hover': {
          backgroundColor: darkMode ? Colours.darkBackground : Colours.lightBackground,
        },
      }}
    >
      <Typography
        sx={{
          color: darkMode ? Colours.darkText : Colours.lightText,
          fontSize: '0.875rem',
        }}
      >
        {page}
      </Typography>
    </MenuItem>
  );
};

export default NavbarMenuItem;
