import { FC } from 'react';
import { Stack } from '@mui/material';
import { User } from 'Components/Shared/Types';
import UserDetails from 'Components/UserProfile/UserDetails';
import OrderHistoryCard from 'Components/UserProfile/OrderHistoryCard';
import EventHistoryCard from 'Components/UserProfile/EventHistoryCard';

type UserSectionsProps = {
  darkMode: boolean;
  user: User;
};

const UserSections: FC<UserSectionsProps> = ({ darkMode, user }) => {
  return (
    <Stack direction="column" spacing={4}>
      <UserDetails darkMode={darkMode} user={user} />
      <OrderHistoryCard darkMode={darkMode} userOrderHistory={user.orderHistory} />
      <EventHistoryCard darkMode={darkMode} userEventHistory={user.eventHistory} />
    </Stack>
  );
};

export default UserSections;
