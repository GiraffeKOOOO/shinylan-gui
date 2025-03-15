import { FC } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Colours from 'Components/Shared/Colours';

type SignUpButtonProps = {
  darkMode: boolean;
};

const SignUpButton: FC<SignUpButtonProps> = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      endIcon={<ArrowCircleRightIcon />}
      sx={{
        border: `1px solid ${Colours.titleOrange}`,
        color: Colours.darkText,
        backgroundColor: Colours.titleOrange,
        textDecorationColor: Colours.titleOrange,
        textTransform: 'none',
      }}
      onClick={() => navigate('/events')}
    >
      Sign Up
    </Button>
  );
};

export default SignUpButton;
