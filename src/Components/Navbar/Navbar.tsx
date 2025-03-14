import { FC, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router';
import { AppBar, Container, Grid2 as Grid, Menu, Stack, Toolbar } from '@mui/material';
import Colours from 'Components/Shared/Colours';
import DarkModeButton from 'Components/Navbar/DarkModeButton';
import MenuButton from 'Components/Navbar/MenuButton';
import shinyLogo from '../../Assets/sl-banner.png';
import NavButton from 'Components/Navbar/NavButton';
import Pages from 'Components/Shared/Pages';

type NavbarProps = {
  darkMode: boolean;
  isMobile: boolean;
};

const Navbar: FC<NavbarProps> = ({ darkMode, isMobile }) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? Colours.darkBackground : Colours.lightBackground,
        color: darkMode ? Colours.darkText : Colours.lightText,
      }}
    >
      <Container>
        <Grid container alignItems="center">
          {/* left side */}
          <Grid size={10}>
            <Toolbar disableGutters={true}>
              <img
                // src={darkMode ? logoWhite : logoDark}
                src={shinyLogo}
                style={{
                  height: '3rem',
                  width: '14rem',
                  marginRight: '2rem',
                  cursor: 'pointer',
                  marginTop: '0.2rem',
                  marginBottom: '0.2rem',
                }}
                onClick={() => navigate('/')}
              />
              <Stack direction="row" justifyContent="space-between">
                <NavButton isMobile={isMobile} buttonName={Pages.Events} />
                <NavButton isMobile={isMobile} buttonName={Pages.Gallery} />
                <NavButton isMobile={isMobile} buttonName={Pages.History} />
                <NavButton isMobile={isMobile} buttonName={Pages.Faq} />
                <NavButton isMobile={isMobile} buttonName={Pages.Contact} />
              </Stack>
            </Toolbar>
          </Grid>

          {/* right side */}
          <Grid size={2}>
            <DarkModeButton />
            <MenuButton
              isOpen={false}
              isMobile={isMobile}
              handleOpenUserMenu={handleOpenUserMenu}
            />
            <Menu
              sx={{
                mt: '3rem',
                maxWidth: '1900px',
                // TODO: might need to add this back in - resize rework
                // minWidth: '1900px',
                '& .MuiMenu-paper': {
                  // maxWidth: '1900px',
                  width: '12rem',
                  backgroundColor: darkMode ? Colours.darkBackground : Colours.lightBackground,
                },
              }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* Drop Down Menu */}
              {/* <NavbarMenuItem setting="Event Tickets" />
              <NavbarMenuItem setting="Settings" />
              {userLoggedIn && <NavbarMenuItem setting="Sign out" />} */}
              <DarkModeButton />
            </Menu>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Navbar;
