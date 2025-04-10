import { FC } from 'react';
import { Button } from '@mui/material';
// import { useNavigate } from 'react-router';
import { Order } from 'Components/Shared/Types';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Colours from 'Components/Shared/Colours';

type ViewOrderButtonProps = {
  //   TODO: remove the optionals
  darkMode?: boolean;
  order?: Order;
};

const ViewOrderButton: FC<ViewOrderButtonProps> = () =>
  //   {
  //     order
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
        View Order
      </Button>
    );
  };

export default ViewOrderButton;
