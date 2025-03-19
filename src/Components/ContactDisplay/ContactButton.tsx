import { FC } from 'react';
import { Button } from '@mui/material';
import { SiMinutemailer } from 'react-icons/si';
import Colours from 'Components/Shared/Colours';

const ContactButton: FC = () => {
  return (
    <Button
      variant="contained"
      endIcon={<SiMinutemailer />}
      sx={{
        border: `1px solid ${Colours.titleOrange}`,
        color: Colours.darkText,
        backgroundColor: Colours.titleOrange,
        textDecorationColor: Colours.titleOrange,
        textTransform: 'none',
        paddingY: '0.2rem',
        paddingLeft: '0.4rem',
        paddingRight: '0.7rem',
      }}
      onClick={() => window.open(`mailto:admin@shinylan.co.uk?subject=ShinyLAN enquiry`)}
    >
      Contact us
    </Button>
  );
};

export default ContactButton;
