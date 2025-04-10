import { FC } from 'react';
import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { User } from 'Components/Shared/Types';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { MdEventRepeat } from 'react-icons/md';
import Colours from 'Components/Shared/Colours';
import EventHistoryCardContent from 'Components/UserProfile/EventHistoryCardContent';

type EventHistoryCardProps = {
  darkMode: boolean;
  userEventHistory: User['eventHistory'];
};

const EventHistoryCard: FC<EventHistoryCardProps> = ({ darkMode, userEventHistory }) => {
  const sortedUserEventHistory = userEventHistory.sort((a, b) => {
    const dateA = new Date(a.dateFrom).getTime();
    const dateB = new Date(b.dateFrom).getTime();
    return dateB - dateA;
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
            Event History
          </Typography>
          <MdEventRepeat
            size={25}
            style={{ color: darkMode ? Colours.darkText : Colours.lightText, marginTop: '-0.3rem' }}
          />
        </Stack>
        <Stack direction="column" spacing={2}>
          <EventHistoryCardContent darkMode={darkMode} userEventHistory={sortedUserEventHistory} />
        </Stack>
        <Stack alignItems="flex-end" sx={{ marginTop: '0.5rem' }}>
          {sortedUserEventHistory.length >= 3 && (
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
              View Event History
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EventHistoryCard;
