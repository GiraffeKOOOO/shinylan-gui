import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { User } from 'Components/Shared/Types';
import EventHistoryCardRow from 'Components/UserProfile/EventHistoryCardRow';
import SkeletonEventHistoryCardRow from 'Components/UserProfile/SkeletonEventHistoryCardRow';

type EventHistoryCardContentProps = {
  darkMode: boolean;
  userEventHistory: User['eventHistory'];
};

const EventHistoryCardContent: FC<EventHistoryCardContentProps> = ({
  darkMode,
  userEventHistory,
}) => {
  if (userEventHistory.length === 0) return <Typography>There is no Event history</Typography>;

  if (userEventHistory.length <= 2) {
    return (
      <Stack spacing={2}>
        {userEventHistory.map((event) => (
          <EventHistoryCardRow key={event.id} darkMode={darkMode} event={event} />
        ))}
      </Stack>
    );
  }

  if (userEventHistory.length > 2) {
    return (
      <Stack spacing={2}>
        <EventHistoryCardRow
          key={userEventHistory[0].id}
          darkMode={darkMode}
          event={userEventHistory[0]}
        />
        <EventHistoryCardRow
          key={userEventHistory[1].id}
          darkMode={darkMode}
          event={userEventHistory[1]}
        />
        <SkeletonEventHistoryCardRow darkMode={darkMode} />
      </Stack>
    );
  }
};

export default EventHistoryCardContent;
