import { FC } from 'react';
import { Grid2 as Grid, Stack, Typography } from '@mui/material';
import Colours from 'Components/Shared/Colours';
import SocialIconButton from 'Components/ContactDisplay/SocialIconButton';
import { Pages, Socials } from 'Components/Shared/Types';
import FooterButton from 'Components/Footer/FooterButton';

type FooterProps = {
  darkMode: boolean;
};

const Footer: FC<FooterProps> = ({ darkMode }) => {
  return (
    <Grid
      container
      sx={{
        width: '100vw',
        maxWidth: '100vw',
        backgroundColor: darkMode ? Colours.darkBackgroundFooter : Colours.lightBackgroundFooter,
        paddingY: '3rem',
        paddingX: '2rem',
      }}
    >
      <Grid size={4}>
        <Stack direction="row" justifyContent="center">
          <Typography
            sx={{
              color: darkMode ? Colours.darkText : Colours.lightText,
            }}
          >
            © 2006-2025 Copyright ShinyLAN.
          </Typography>
        </Stack>
      </Grid>
      <Grid size={4}>
        <Stack direction="row" justifyContent="center">
          <FooterButton darkMode={darkMode} page={Pages.Events} />
          <FooterButton darkMode={darkMode} page={Pages.Gallery} />
          <FooterButton darkMode={darkMode} page={Pages.History} />
          <FooterButton darkMode={darkMode} page={Pages.Faq} />
          <FooterButton darkMode={darkMode} page={Pages.Contact} />
        </Stack>
      </Grid>
      <Grid size={4}>
        <Stack direction="row" justifyContent="center">
          <SocialIconButton darkMode={darkMode} social={Socials.facebook} />
          <SocialIconButton darkMode={darkMode} social={Socials.instagram} />
          <SocialIconButton darkMode={darkMode} social={Socials.x} />
          <SocialIconButton darkMode={darkMode} social={Socials.youtube} />
          <SocialIconButton darkMode={darkMode} social={Socials.discord} />
          <SocialIconButton darkMode={darkMode} social={Socials.steam} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
