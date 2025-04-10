import { FC } from 'react';
import { Button } from '@mui/material';
// import { useNavigate } from 'react-router';
import { Event } from 'Components/Shared/Types';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Colours from 'Components/Shared/Colours';

type ViewEventButtonProps = {
  //   TODO: remove the optionals
  darkMode?: boolean;
  event?: Event;
};

const ViewEventButton: FC<ViewEventButtonProps> = () =>
  //   {
  //     event
  //   }
  {
    //   const navigate = useNavigate();
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
          padding: '0.2rem 0.4rem',
        }}
        //   TODO: mage a order page or order modal to use this with
        //   onClick={() => navigate(`/order?id=${order.id}`)}
      >
        View Event
      </Button>
    );
  };

export default ViewEventButton;
