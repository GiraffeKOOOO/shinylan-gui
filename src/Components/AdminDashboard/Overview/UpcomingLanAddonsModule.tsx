import { FC } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import AnimatedNumbers from 'react-animated-numbers';
import Colours from 'Components/Shared/Colours';
import addonsImage from 'Assets/addons.png';

type UpcomingLanAddonsModuleProps = {
  darkMode: boolean;
};

const UpcomingLanAddonsModule: FC<UpcomingLanAddonsModuleProps> = () => {
  const addonsPurchased = 12;

  return (
    <Card
      sx={{ border: `1px solid ${Colours.cardBorderGrey}`, minWidth: '350px', height: '243px' }}
    >
      <CardActionArea
        // TODO: make card navigate to the upcoming LAN
        onClick={() => {
          console.log(`Navigating to the Next LAN`);
        }}
      >
        <Stack direction="row" sx={{ paddingY: '1rem' }} justifyContent="center">
          <Stack direction="row">
            <Typography sx={{ marginY: 'auto', fontSize: '2rem', marginRight: '1rem' }}>
              Addons
            </Typography>
            <CardMedia
              component="img"
              image={addonsImage}
              alt="ticket image"
              sx={{
                height: 120,
                objectFit: 'contain',
              }}
            />
          </Stack>
        </Stack>
        <CardContent>
          <Stack direction="column" sx={{ marginX: 'auto' }}>
            <Typography sx={{ fontSize: '1.2rem' }}>Addons purchased</Typography>
            <Stack sx={{ marginX: 'auto' }}>
              <AnimatedNumbers
                transitions={() => ({
                  duration: 0.5,
                })}
                animateToNumber={addonsPurchased}
                fontStyle={{
                  fontSize: '1.5rem',
                }}
              />
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UpcomingLanAddonsModule;
