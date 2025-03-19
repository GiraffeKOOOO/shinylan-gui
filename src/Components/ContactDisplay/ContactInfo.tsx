import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { IoIosMail } from 'react-icons/io';
import { Socials } from 'Components/Shared/Types';
import SocialIconButton from 'Components/ContactDisplay/SocialIconButton';
import ContactButton from 'Components/ContactDisplay/ContactButton';
import Colours from 'Components/Shared/Colours';

type ContactInfoProps = {
  darkMode: boolean;
};

const ContactInfo: FC<ContactInfoProps> = ({ darkMode }) => {
  return (
    <Stack sx={{ marginTop: '12rem', marginLeft: '7rem' }}>
      <Stack direction="column" alignItems="flex-start">
        <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
          For general enquires, event information and paypal queries email us
        </Typography>
        <Stack
          direction="row"
          sx={{ marginY: '0.5rem', color: darkMode ? Colours.darkText : Colours.lightText }}
        >
          <IoIosMail style={{ fontSize: '1.5rem' }} />
          <Typography
            sx={{ color: darkMode ? Colours.darkText : Colours.lightText, marginLeft: '0.4rem' }}
          >
            admin@shinylan.co.uk
          </Typography>
        </Stack>
        <Stack direction="row">
          <ContactButton />
        </Stack>
      </Stack>
      <Stack direction="column" alignItems="flex-start" sx={{ marginTop: '1rem' }}>
        <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
          You can also find us on:
        </Typography>
        <Stack direction="row" sx={{ marginTop: '0.5rem' }}>
          <SocialIconButton darkMode={darkMode} social={Socials.facebook} />
          <SocialIconButton darkMode={darkMode} social={Socials.instagram} />
          <SocialIconButton darkMode={darkMode} social={Socials.x} />
          <SocialIconButton darkMode={darkMode} social={Socials.youtube} />
          <SocialIconButton darkMode={darkMode} social={Socials.discord} />
          <SocialIconButton darkMode={darkMode} social={Socials.steam} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactInfo;
