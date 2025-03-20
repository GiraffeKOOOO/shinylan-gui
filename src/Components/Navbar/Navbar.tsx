import { FC, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router';
import { AppBar, Container, Grid2 as Grid, Menu, Stack, Toolbar } from '@mui/material';
import { Pages } from 'Components/Shared/Types';
import DarkModeButton from 'Components/Navbar/DarkModeButton';
import MenuButton from 'Components/Navbar/MenuButton';
import NavButton from 'Components/Navbar/NavButton';
import SignInButton from 'Components/Navbar/SignInButton';
import SignUpButton from 'Components/Navbar/SignUpButton';
import Colours from 'Components/Shared/Colours';
import shinyLogo from '../../Assets/sl-banner.png';

type NavbarProps = {
  darkMode: boolean;
  isMobile: boolean;
};

const Navbar: FC<NavbarProps> = ({ darkMode, isMobile }) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // TODO: this needs to be removed when actual user state is here
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

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
          <Grid size={9}>
            <Toolbar disableGutters={true}>
              <img
                // src={darkMode ? logoWhite : logoDark}
                src={shinyLogo}
                alt="shiny lan logo"
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
                <NavButton isMobile={isMobile} page={Pages.Events} />
                <NavButton isMobile={isMobile} page={Pages.Gallery} />
                <NavButton isMobile={isMobile} page={Pages.History} />
                <NavButton isMobile={isMobile} page={Pages.Faq} />
                <NavButton isMobile={isMobile} page={Pages.Contact} />
              </Stack>
            </Toolbar>
          </Grid>

          {/* right side */}
          <Grid size={3}>
            <Stack direction="row" spacing={2}>
              <DarkModeButton />
              {userLoggedIn ? (
                <>
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
                        backgroundColor: darkMode
                          ? Colours.darkBackground
                          : Colours.lightBackground,
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
                </>
              ) : (
                <>
                  <SignInButton darkMode={darkMode} />
                  <SignUpButton />
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Navbar;
