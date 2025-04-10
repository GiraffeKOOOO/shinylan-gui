import { FC } from 'react';
import { Stack } from '@mui/material';
import { User } from 'Components/Shared/Types';
import UserProfileCard from 'Components/UserProfile/UserProfileCard';
import UserProfileSocials from 'Components/UserProfile/UserProfileSocials';
import UserProfileActions from 'Components/UserProfile/UserProfileActions';

type UserProfileSectionsProps = {
  darkMode: boolean;
  user: User;
};

const UserProfileSections: FC<UserProfileSectionsProps> = ({ darkMode, user }) => {
  return (
    <Stack direction="column" spacing={4}>
      <UserProfileCard darkMode={darkMode} user={user} />
      <UserProfileSocials darkMode={darkMode} user={user} />
      <UserProfileActions darkMode={darkMode} user={user} />
    </Stack>
  );
};

export default UserProfileSections;
