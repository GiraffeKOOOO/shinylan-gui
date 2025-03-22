import { FC } from 'react';
import { Stack } from '@mui/material';
import bannerImage from '../../Assets/shinylan-1.jpg';
import BannerText from 'Components/MainBanner/BannerText';
import Colours from 'Components/Shared/Colours';

const MainBanner: FC = () => {
  return (
    <Stack sx={{ position: 'static' }}>
      <Stack
        sx={{
          backgroundImage: `url(${bannerImage})`,
          height: '400px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 44%',
        }}
      >
        <Stack
          sx={{
            height: '300px',
            width: '90vw',
            backgroundColor: Colours.bannerImageBackground,
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
              <BannerText orangeText={false} text={'Shiniest'} />
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
