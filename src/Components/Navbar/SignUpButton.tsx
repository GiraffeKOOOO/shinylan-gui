import { Button } from '@mui/material';
import Colours from 'Components/Shared/Colours';
import { FC } from 'react';

const SignUpButton: FC = () => {
  return (
    <Button
      variant="contained"
      sx={{
        border: `1px solid ${Colours.titleOrange}`,
        borderRadius: '20px',
        color: Colours.darkText,
        backgroundColor: Colours.titleOrange,
        textDecorationColor: Colours.titleOrange,
        textTransform: 'none',
        paddingX: '0.8rem',
      }}
      onClick={() => {}}
    >
      Sign up
    </Button>
  );
};

export default SignUpButton;
