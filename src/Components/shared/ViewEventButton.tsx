import { FC } from 'react';
import { Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Colours from 'Components/Shared/Colours';
import { useNavigate } from 'react-router';

type ViewEventButtonProps = {
  darkMode?: boolean;
  eventId: number;
  homePage: boolean;
};

const ViewEventButton: FC<ViewEventButtonProps> = ({ homePage, eventId }) => {
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
      onClick={() => navigate(`/event?id=${eventId}`)}
    >
      {homePage ? 'Sign Up' : 'View Event'}
    </Button>
  );
};

export default ViewEventButton;
