import { FC } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { Event } from 'Components/Shared/Types';
import Colours from 'Components/Shared/Colours';
import easterImage from 'Assets/easter.webp';
import summerImage from 'Assets/summer.jpg';

type UpcomingLanModuleProps = {
  darkMode: boolean;
  upcomingLan: Event;
};

const UpcomingLanModule: FC<UpcomingLanModuleProps> = ({ upcomingLan }) => {
  const lanYear = upcomingLan.dateFrom.getFullYear();
  return (
    <Card sx={{ border: `1px solid ${Colours.cardBorderGrey}`, height: '328px' }}>
      <CardActionArea
        // TODO: make card navigate to the upcoming LAN
        onClick={() => {
          console.log(`Navigating to the Next LAN`);
        }}
      >
        <Stack direction="row">
          <Stack direction="column" sx={{ marginY: 'auto' }}>
            <Typography sx={{ marginX: '1rem', fontSize: '2rem', width: '15rem' }}>
              Next LAN
            </Typography>
            <Typography sx={{ marginX: '1rem', fontSize: '1.7rem', width: '15rem' }}>
              {upcomingLan.type} {lanYear}
            </Typography>
            <Typography sx={{ marginX: '1rem', fontSize: '1.5rem', width: '15rem' }}>
              {upcomingLan.description}
            </Typography>
          </Stack>
          <CardMedia
            component="img"
            height="200"
            image={upcomingLan.type === 'Summer' ? summerImage : easterImage}
            alt="lan image"
          />
        </Stack>
        <CardContent>
          <Stack direction="row">
            <Stack direction="column" sx={{ margin: 'auto' }}>
              <Typography sx={{ marginY: 'auto', fontSize: '1.5rem' }}>Date</Typography>
              <Typography sx={{ marginY: 'auto', fontSize: '1.2rem' }}>
                From: {upcomingLan.dateFrom.toDateString()}
              </Typography>
              <Typography sx={{ marginY: 'auto', fontSize: '1.2rem' }}>
                To: {upcomingLan.dateTo.toDateString()}
              </Typography>
            </Stack>
            <Stack direction="column" sx={{ margin: 'auto' }}>
              <Typography sx={{ marginY: 'auto', fontSize: '1.5rem' }}>Venue</Typography>
              <Typography sx={{ marginY: 'auto', fontSize: '1.2rem' }}>
                {upcomingLan.venue.name}
              </Typography>
            </Stack>
            <Stack direction="column" sx={{ margin: 'auto' }}>
              <Typography sx={{ marginY: 'auto', fontSize: '1.5rem' }}>Capacity</Typography>
              <Typography sx={{ marginY: 'auto', fontSize: '1.2rem' }}>
                {upcomingLan.venue.capacity}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UpcomingLanModule;
