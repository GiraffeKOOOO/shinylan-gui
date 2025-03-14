import { FC } from 'react';
import { Typography } from '@mui/material';
import Colours from 'Components/Shared/Colours';

type BannerTextProps = {
  orangeText: boolean;
  text: string;
};

const BannerText: FC<BannerTextProps> = ({ orangeText, text }) => {
  return (
    <Typography
      sx={{
        color: orangeText ? Colours.darkText : Colours.titleOrange,
        fontSize: {
          xs: '1.4rem',
          sm: '3rem',
          md: '3.5rem',
          lg: '4.75rem',
        },
        letterSpacing: '-1.5px',
        fontFamily: 'Varela Round',
        marginRight: {
          xs: '0.4rem',
          sm: '0.5rem',
          md: '1rem',
        },
      }}
    >
      {text}
    </Typography>
  );
};

export default BannerText;
