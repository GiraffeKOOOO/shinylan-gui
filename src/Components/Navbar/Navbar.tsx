import { FC, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router';
import { AppBar, Container, Grid2 as Grid, Menu, Stack, Toolbar } from '@mui/material';
import { useRecoilState } from 'recoil';
import { OVERRIDE } from 'Components/LoginModal/LoginModalState';
import { Pages } from 'Components/Shared/Types';
import DarkModeButton from 'Components/Navbar/DarkModeButton';
import MenuButton from 'Components/Navbar/MenuButton';
import NavButton from 'Components/Navbar/NavButton';
import NavbarMenuItem from 'Components/Navbar/NavbarMenuItem';
import SignInButton from 'Components/Navbar/SignInButton';
import SignUpButton from 'Components/Navbar/SignUpButton';
import slBannerLight from 'Assets/sl-banner-light.png';
import slBannerDark from 'Assets/sl-banner-dark.png';
import Colours from 'Components/Shared/Colours';

type NavbarProps = {
  darkMode: boolean;
  isMobile: boolean;
};

const Navbar: FC<NavbarProps> = ({ darkMode, isMobile }) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // TODO: this needs to be removed when actual user state is here
  const [overide] = useRecoilState(OVERRIDE);

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
                src={darkMode ? slBannerDark : slBannerLight}
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
                <NavButton darkMode={darkMode} isMobile={isMobile} page={Pages.Events} />
                <NavButton darkMode={darkMode} isMobile={isMobile} page={Pages.Gallery} />
                <NavButton darkMode={darkMode} isMobile={isMobile} page={Pages.About} />
                <NavButton darkMode={darkMode} isMobile={isMobile} page={Pages.Faq} />
                <NavButton darkMode={darkMode} isMobile={isMobile} page={Pages.Contact} />
              </Stack>
            </Toolbar>
          </Grid>

          {/* right side */}
          <Grid size={3}>
            <Stack direction="row" spacing={2}>
              <DarkModeButton />
              {overide ? (
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
                          ? Colours.navbarMenuDarkBackground
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
                    <NavbarMenuItem darkMode={darkMode} page={Pages.Admin} />
                    <NavbarMenuItem darkMode={darkMode} page={Pages.Profile} />
                    <NavbarMenuItem darkMode={darkMode} page={Pages.OrderHistory} />
                    <NavbarMenuItem darkMode={darkMode} page={Pages.LogOut} />
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
