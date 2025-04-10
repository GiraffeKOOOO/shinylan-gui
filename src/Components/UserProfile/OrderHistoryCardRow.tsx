import { FC } from 'react';
import { Card, Divider, Stack, Typography } from '@mui/material';
import { Order } from 'Components/Shared/Types';
import Colours from 'Components/Shared/Colours';
import ViewOrderButton from 'Components/UserProfile/ViewOrderButton';

type OrderHistoryCardRowProps = {
  darkMode: boolean;
  order: Order;
};

const OrderHistoryCardRow: FC<OrderHistoryCardRowProps> = ({ darkMode, order }) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat('en-GB', {
      weekday: 'short', // "Friday"
      day: 'numeric', // "7"
      month: 'short', // "April"
      year: 'numeric', // "2025"
    }).format(date);

  return (
    <Card sx={{ border: `1px solid ${Colours.cardBorderGrey}` }}>
      <Stack
        direction="row"
        sx={{
          height: '4.5rem',
          alignItems: 'center',
          paddingRight: '0.2rem',
          borderRadius: '7px',
          justifyContent: 'space-evenly',
        }}
      >
        <Stack direction="column" sx={{ marginX: '0.2rem' }}>
          <Typography>Id</Typography>
          <Divider orientation="horizontal" sx={{ marginX: '0.1rem' }} />
          <Typography>{order.id}</Typography>
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack direction="column" sx={{ marginX: '0.2rem' }}>
          <Typography>Items </Typography>
          <Divider orientation="horizontal" sx={{ marginX: '0.1rem' }} />
          <Typography>{order.items.length}</Typography>
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack direction="column" sx={{ marginX: '0.2rem' }}>
          <Typography>Total</Typography>
          <Divider orientation="horizontal" sx={{ marginX: '0.1rem' }} />
          <Typography>{order.orderTotal}</Typography>
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack direction="column" sx={{ marginX: '0.2rem' }}>
          <Typography>Status</Typography>
          <Divider orientation="horizontal" sx={{ marginX: '0.1rem' }} />
          <Typography>{order.status}</Typography>
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack direction="column" sx={{ marginX: '0.2rem' }}>
          <Typography>Order created</Typography>
          <Divider orientation="horizontal" sx={{ marginX: '0.1rem' }} />
          <Typography>{formatDate(order.orderCreatedDate)}</Typography>
        </Stack>
        <Divider orientation="vertical" sx={{ marginX: '0.1rem' }} />
        <Stack sx={{ width: '8rem' }}>
          <ViewOrderButton order={order} darkMode={darkMode} />
        </Stack>
      </Stack>
    </Card>
  );
};

export default OrderHistoryCardRow;
