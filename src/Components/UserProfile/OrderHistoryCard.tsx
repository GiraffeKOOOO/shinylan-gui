import { FC } from 'react';
import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { User } from 'Components/Shared/Types';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Colours from 'Components/Shared/Colours';
// import OrderHistoryCardRow from 'Components/UserProfile/OrderHistoryCardRow';
import OrderHistoryCardContent from 'Components/UserProfile/OrderHistoryCardContent';

type OrderHistoryCardProps = {
  darkMode: boolean;
  userOrderHistory: User['orderHistory'];
};

const OrderHistoryCard: FC<OrderHistoryCardProps> = ({ darkMode, userOrderHistory }) => {
  const sortedUserOrderHistory = userOrderHistory.sort((a, b) => {
    const dateA = new Date(a.orderCreatedDate).getTime();
    const dateB = new Date(b.orderCreatedDate).getTime();
    return dateB - dateA; // Sort in descending order
  });

  return (
    <Card
      sx={{
        width: '600px',
        backgroundColor: darkMode ? Colours.darkBackgroundFooter : Colours.lightBackgroundFooter,
        border: `1px solid ${darkMode ? Colours.darkText : Colours.transparent}`,
        borderRadius: '15px',
      }}
    >
      <CardContent
        sx={{
          paddingBottom: '0.2rem !important',
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ marginBottom: '0.5rem' }}
        >
          <Typography
            sx={{
              color: darkMode ? Colours.darkText : Colours.lightText,
              fontSize: '1.5rem',
              letterSpacing: '-1.5px',
              fontFamily: 'Varela Round',
            }}
          >
            Order History
          </Typography>
          <MdOutlineShoppingCart
            size={25}
            style={{ color: darkMode ? Colours.darkText : Colours.lightText, marginTop: '-0.3rem' }}
          />
        </Stack>
        <Stack direction="column" spacing={2}>
          {/* content here */}
          <OrderHistoryCardContent darkMode={darkMode} userOrderHistory={sortedUserOrderHistory} />
          {/* {userOrderHistory.map((order) => (
            <OrderHistoryCardRow key={order.id} darkMode={darkMode} order={order} />
          ))} */}
        </Stack>
        <Stack alignItems="flex-end" sx={{ marginTop: '0.5rem' }}>
          {userOrderHistory.length > 0 && (
            <Button
              variant="text"
              endIcon={<VisibilityIcon />}
              sx={{
                width: '170px',
                color: darkMode ? Colours.darkText : Colours.lightText,
                textDecorationColor: Colours.titleOrange,
                textTransform: 'none',
              }}
              // onClick={() => goToEditDetails(false)}
            >
              View Order History
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OrderHistoryCard;
