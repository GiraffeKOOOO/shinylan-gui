import { FC } from 'react';
import { IconButton } from '@mui/material';
import { FaDiscord, FaFacebook, FaInstagram, FaSteam, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GrContact } from 'react-icons/gr';
import { SocialLinks, Socials } from 'Components/Shared/Types';
import Colours from 'Components/Shared/Colours';

type SocialIconButtonProps = {
  darkMode: boolean;
  social: Socials;
};

const iconSwitch = (social: string) => {
  switch (social) {
    case Socials.facebook:
      return <FaFacebook />;
    case Socials.instagram:
      return <FaInstagram />;
    case Socials.x:
      return <FaXTwitter />;
    case Socials.youtube:
      return <FaYoutube />;
    case Socials.discord:
      return <FaDiscord />;
    case Socials.steam:
      return <FaSteam />;
    default:
      return <GrContact />;
  }
};

const redirectSwitch = (social: string) => {
  console.log(`TEST: ${social}`);
  switch (social) {
    case Socials.facebook:
      return window.open(`${SocialLinks.facebook}`, '_blank', 'noopener,noreferrer');
    case Socials.instagram:
      return window.open(`${SocialLinks.instagram}`, '_blank', 'noopener,noreferrer');
    case Socials.x:
      return window.open(`${SocialLinks.x}`, '_blank', 'noopener,noreferrer');
    case Socials.youtube:
      return window.open(`${SocialLinks.youtube}`, '_blank', 'noopener,noreferrer');
    case Socials.discord:
      return window.open(`${SocialLinks.discord}`, '_blank', 'noopener,noreferrer');
    case Socials.steam:
      return window.open(`${SocialLinks.steam}`, '_blank', 'noopener,noreferrer');
    default:
      return <GrContact />;
  }
};

const SocialIconButton: FC<SocialIconButtonProps> = ({ darkMode, social }) => {
  return (
    <IconButton
      sx={{
        color: darkMode ? Colours.darkText : Colours.lightText,
        fontSize: '2rem',
        marginX: '0.5rem',
      }}
      onClick={() => redirectSwitch(social)}
    >
      {iconSwitch(social)}
    </IconButton>
  );
};

export default SocialIconButton;
