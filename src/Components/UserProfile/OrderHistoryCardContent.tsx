import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { User } from 'Components/Shared/Types';
import OrderHistoryCardRow from 'Components/UserProfile/OrderHistoryCardRow';
import SkeletonOrderHistoryCardRow from 'Components/UserProfile/SkeletonOrderHistoryCardRow';

type OrderHistoryCardContentProps = {
  darkMode: boolean;
  userOrderHistory: User['orderHistory'];
};

const OrderHistoryCardContent: FC<OrderHistoryCardContentProps> = ({
  darkMode,
  userOrderHistory,
}) => {
  if (userOrderHistory.length === 0) return <Typography>You have no orders</Typography>;

  if (userOrderHistory.length <= 2) {
    return (
      <Stack spacing={2}>
        {userOrderHistory.map((order) => (
          <OrderHistoryCardRow key={order.id} darkMode={darkMode} order={order} />
        ))}
      </Stack>
    );
  }

  if (userOrderHistory.length > 2) {
    return (
      <Stack spacing={2}>
        <OrderHistoryCardRow
          key={userOrderHistory[0].id}
          darkMode={darkMode}
          order={userOrderHistory[0]}
        />
        <OrderHistoryCardRow
          key={userOrderHistory[1].id}
          darkMode={darkMode}
          order={userOrderHistory[1]}
        />
        <SkeletonOrderHistoryCardRow darkMode={darkMode} />
      </Stack>
    );
  }
};

export default OrderHistoryCardContent;
