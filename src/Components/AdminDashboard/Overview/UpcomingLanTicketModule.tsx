import { FC } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import AnimatedNumbers from 'react-animated-numbers';
import Colours from 'Components/Shared/Colours';
import ticketImage from 'Assets/tickets.png';

type UpcomingLanTicketModuleProps = {
  darkMode: boolean;
};

const UpcomingLanTicketModule: FC<UpcomingLanTicketModuleProps> = () => {
  // calculate tickets
  const byoc3DayTickets = 10;
  const byoc2DayTickets = 1;
  const spectator3DayTickets = 2;
  const spectator2DayTickets = 0;

  return (
    <Card
      sx={{ border: `1px solid ${Colours.cardBorderGrey}`, minWidth: '610px', height: '243px' }}
    >
      <CardActionArea
        // TODO: make card navigate to the upcoming LAN
        onClick={() => {
          console.log(`Navigating to the Next LAN`);
        }}
      >
        <Stack direction="row" sx={{ paddingY: '1rem' }} justifyContent="flex-end">
          <Stack direction="row">
            <Typography sx={{ marginY: 'auto', fontSize: '2rem' }}>Tickets</Typography>
            <CardMedia
              component="img"
              image={ticketImage}
              alt="ticket image"
              sx={{
                height: 120,
                objectFit: 'contain',
                paddingLeft: '10rem',
                paddingRight: '1rem',
              }}
            />
          </Stack>
        </Stack>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Stack
              direction="column"
              sx={{ borderRight: `1px solid ${Colours.cardBorderGrey}`, paddingRight: '0.4rem' }}
            >
              <Typography sx={{ fontSize: '1.2rem' }}>BYOC 3 Day</Typography>
              <Stack sx={{ marginX: 'auto' }}>
                <AnimatedNumbers
                  transitions={() => ({
                    duration: 0.5,
                  })}
                  animateToNumber={byoc3DayTickets}
                  fontStyle={{
                    fontSize: '1.5rem',
                  }}
                />
              </Stack>
            </Stack>
            <Stack
              direction="column"
              sx={{ borderRight: `1px solid ${Colours.cardBorderGrey}`, paddingRight: '0.4rem' }}
            >
              <Typography sx={{ fontSize: '1.2rem' }}>BYOC 2 Day</Typography>
              <Stack sx={{ marginX: 'auto' }}>
                <AnimatedNumbers
                  transitions={() => ({
                    duration: 0.5,
                  })}
                  animateToNumber={byoc2DayTickets}
                  fontStyle={{
                    fontSize: '1.5rem',
                  }}
                />
              </Stack>
            </Stack>
            <Stack
              direction="column"
              sx={{ borderRight: `1px solid ${Colours.cardBorderGrey}`, paddingRight: '0.4rem' }}
            >
              <Typography sx={{ fontSize: '1.2rem' }}>Spectator 3 Day</Typography>
              <Stack sx={{ marginX: 'auto' }}>
                <AnimatedNumbers
                  transitions={() => ({
                    duration: 0.5,
                  })}
                  animateToNumber={spectator3DayTickets}
                  fontStyle={{
                    fontSize: '1.5rem',
                  }}
                />
              </Stack>
            </Stack>
            <Stack direction="column">
              <Typography sx={{ fontSize: '1.2rem' }}>Spectator 2 Day</Typography>
              <Stack sx={{ marginX: 'auto' }}>
                <AnimatedNumbers
                  transitions={() => ({
                    duration: 0.5,
                  })}
                  animateToNumber={spectator2DayTickets}
                  fontStyle={{
                    fontSize: '1.5rem',
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UpcomingLanTicketModule;
