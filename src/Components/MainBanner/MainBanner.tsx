import { FC } from 'react';
import { Stack } from '@mui/material';
import bannerImage from '../../Assets/shinylan-1.jpg';
import BannerText from 'Components/MainBanner/BannerText';

const MainBanner: FC = () => {
  return (
    <Stack sx={{ position: 'static', borderTop: `1px solid black` }}>
      <Stack
        sx={{
          backgroundImage: `url(${bannerImage})`,
          height: '400px',
          width: '100vw',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 44%',
        }}
      >
        <Stack
          sx={{
            height: '300px',
            width: '90vw',
            backgroundColor: 'rgba(60, 75, 98, 0.7)',
            position: 'relative',
            bottom: '-15%',
            left: '5%',
            borderRadius: '10px',
            backdropFilter: 'blur(3px)',
          }}
        >
          <Stack flexDirection="column" sx={{ margin: 'auto' }}>
            <Stack flexDirection="row" sx={{ margin: 'auto' }}>
              <BannerText orangeText text={`The South West's`} />
              <BannerText orangeText={false} text={'shiniest'} />
            </Stack>
            <Stack sx={{ margin: 'auto' }}>
              <BannerText orangeText text={'LAN Party'} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainBanner;
