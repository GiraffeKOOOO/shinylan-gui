import { FC } from 'react';
import { Card, CardActionArea, CardMedia, Stack, Typography } from '@mui/material';
import AnimatedNumbers from 'react-animated-numbers';
import { Event } from 'Components/Shared/Types';
import chair from 'Assets/chair.png';
import Colours from 'Components/Shared/Colours';

type UpcomingLanSeatModuleProps = {
  darkMode: boolean;
  upcomingLan: Event;
};

const UpcomingLanSeatModule: FC<UpcomingLanSeatModuleProps> = ({ upcomingLan }) => {
  // calculate seats purchased
  const seatsPurchased = 15;
  const seatsLeft = upcomingLan.venue.capacity - seatsPurchased;

  return (
    <Card sx={{ border: `1px solid ${Colours.cardBorderGrey}`, height: '243px' }}>
      <CardActionArea
        // TODO: make card navigate to the upcoming LAN
        onClick={() => {
          console.log(`Navigating to the Next LAN`);
        }}
      >
        <Stack direction="row" sx={{ paddingY: '1rem' }}>
          <Stack direction="column" sx={{ marginY: 'auto' }}>
            <Typography sx={{ marginX: '1rem', fontSize: '2rem', width: '12rem' }}>
              Seats
            </Typography>
            <Stack direction="row" sx={{ marginX: 'auto' }}>
              <Stack sx={{ marginTop: '6px', marginRight: '0.5rem' }}>
                <AnimatedNumbers
                  transitions={() => ({
                    duration: 0.5,
                  })}
                  animateToNumber={seatsPurchased}
                  fontStyle={{
                    fontSize: '2rem',
                  }}
                />
              </Stack>
              <Typography sx={{ fontSize: '2rem' }}>/ {upcomingLan.venue.capacity}</Typography>
            </Stack>
            <Stack direction="row" sx={{ marginX: 'auto' }}>
              <Stack sx={{ marginTop: '5px', marginRight: '0.5rem' }}>
                <AnimatedNumbers
                  transitions={() => ({
                    duration: 0.5,
                  })}
                  animateToNumber={seatsLeft}
                  fontStyle={{
                    fontSize: '1.5rem',
                  }}
                />
              </Stack>
              <Typography sx={{ fontSize: '1.5rem' }}>seats left</Typography>
            </Stack>
          </Stack>
          <CardMedia
            component="img"
            image={chair}
            alt="chair image"
            sx={{
              height: 200,
              width: '100%',
              objectFit: 'contain',
            }}
          />
        </Stack>
      </CardActionArea>
    </Card>
  );
};

export default UpcomingLanSeatModule;
