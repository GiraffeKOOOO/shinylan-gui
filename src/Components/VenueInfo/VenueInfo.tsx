import { FC, useCallback, useState } from 'react';
import { Grid2 as Grid, Stack, Typography } from '@mui/material';
import ReactSimpleImageViewer from 'react-simple-image-viewer';
import { BsShopWindow } from 'react-icons/bs';
import { MdChair, MdFastfood } from 'react-icons/md';
import { IoBeer } from 'react-icons/io5';
import { PiCookingPotFill } from 'react-icons/pi';
import { FaBed } from 'react-icons/fa';
import { Venue } from 'Components/Shared/Types';
import VenueCard from 'Components/VenueInfo/VenueCard';
import VenueFacilities1 from 'Components/VenueInfo/VenueFacilities1';
import VenueFacilities2 from 'Components/VenueInfo/VenueFacilities2';
import Colours from 'Components/Shared/Colours';
import hallImage1 from 'Assets/hall-1.jpg';
import hallImage2 from 'Assets/hall-2.jpg';
import hallImage3 from 'Assets/hall-3.jpg';

type VenueInfoProps = {
  darkMode: boolean;
  venue: Venue;
};

const hallImages = [hallImage1, hallImage2, hallImage3];

const VenueInfo: FC<VenueInfoProps> = ({ darkMode, venue }) => {
  const [pictureIndex, setPictureIndex] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setPictureIndex(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setPictureIndex(-1);
    setIsViewerOpen(false);
  };
  return (
    <Grid container sx={{ marginTop: '1rem', marginBottom: '3rem' }}>
      {/* Padding left */}
      <Grid size={1} />

      {/* center column - main content */}
      <Grid size={10}>
        {/* Title */}
        <Stack direction="column">
          <Typography
            sx={{
              color: darkMode ? Colours.darkText : Colours.lightText,
              fontSize: {
                xs: '1.4rem',
                sm: '2rem',
                lg: '2.5rem',
              },
              letterSpacing: '-1.5px',
              fontFamily: 'Varela Round',
            }}
          >
            Venue information
          </Typography>
          {/* main content */}
          <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
            <Grid size={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <VenueCard darkMode={darkMode} venue={venue} openImageViewer={openImageViewer} />
            </Grid>
            <Grid size={4}>
              <VenueFacilities1 darkMode={darkMode} />
            </Grid>
            <Grid size={4}>
              <VenueFacilities2 darkMode={darkMode} />
            </Grid>

            {/* next section */}
            <Stack
              sx={{
                backgroundColor: darkMode
                  ? Colours.darkBackgroundFooter
                  : Colours.lightBackgroundFooter,
                width: '100%',
                marginX: 'auto',
                borderRadius: '10px',
              }}
            >
              <Stack textAlign="left" sx={{ marginLeft: '0.5rem', marginY: '0.5rem' }}>
                <Typography
                  sx={{
                    color: darkMode ? Colours.darkText : Colours.lightText,
                    fontSize: '1.5rem',
                    letterSpacing: '-1.5px',
                    fontFamily: 'Varela Round',
                  }}
                >
                  Other considerations
                </Typography>
              </Stack>
              {/* shops */}
              <Stack
                direction="column"
                textAlign="left"
                sx={{ marginLeft: '0.5rem', marginY: '0.5rem' }}
              >
                <Stack direction="row" textAlign="left" alignItems="center">
                  <Typography
                    sx={{
                      color: darkMode ? Colours.darkText : Colours.lightText,
                      fontSize: '1.3rem',
                      letterSpacing: '-1.5px',
                      fontFamily: 'Varela Round',
                    }}
                  >
                    Nearest Shop
                  </Typography>
                  <BsShopWindow
                    style={{
                      fontSize: '1.3rem',
                      marginLeft: '0.5rem',
                      color: darkMode ? Colours.darkText : Colours.lightText,
                    }}
                  />
                </Stack>
                <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
                  The nearest supermarket, Tesco is about 4 miles away. Weymouth Ave, Dorchester DT1
                  2RY
                </Typography>
              </Stack>
              {/* takeaways */}
              <Stack
                direction="column"
                textAlign="left"
                sx={{ marginLeft: '0.5rem', marginY: '0.5rem' }}
              >
                <Stack direction="row" textAlign="left" alignItems="center">
                  <Typography
                    sx={{
                      color: darkMode ? Colours.darkText : Colours.lightText,
                      fontSize: '1.3rem',
                      letterSpacing: '-1.5px',
                      fontFamily: 'Varela Round',
                    }}
                  >
                    Takeaways
                  </Typography>
                  <MdFastfood
                    style={{
                      fontSize: '1.3rem',
                      marginLeft: '0.5rem',
                      color: darkMode ? Colours.darkText : Colours.lightText,
                    }}
                  />
                </Stack>
                <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
                  There are a few local takeaways via Just Eat who will deliver to the hall
                  <a
                    href="https://www.just-eat.co.uk/area/dt2-dorchester"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: '0.3rem' }}
                  >
                    https://www.just-eat.co.uk/area/dt2-dorchester
                  </a>
                </Typography>
              </Stack>
              {/* drinking */}
              <Stack
                direction="column"
                textAlign="left"
                sx={{ marginLeft: '0.5rem', marginY: '0.5rem' }}
              >
                <Stack direction="row" textAlign="left" alignItems="center">
                  <Typography
                    sx={{
                      color: darkMode ? Colours.darkText : Colours.lightText,
                      fontSize: '1.3rem',
                      letterSpacing: '-1.5px',
                      fontFamily: 'Varela Round',
                    }}
                  >
                    Drinking
                  </Typography>
                  <IoBeer
                    style={{
                      fontSize: '1.3rem',
                      marginLeft: '0.5rem',
                      color: darkMode ? Colours.darkText : Colours.lightText,
                    }}
                  />
                </Stack>
                <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
                  We suggest bringing your own alcohol, however should you want to go to a pub you
                  can check out the Royal Oak located a few minutes walk from the hall, more details
                  on their website {''}
                  <a
                    href="https://theroyaloakcerneabbas.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: '0.3rem' }}
                  >
                    https://theroyaloakcerneabbas.co.uk
                  </a>
                </Typography>
              </Stack>
              {/* cooking */}
              <Stack
                direction="column"
                textAlign="left"
                sx={{ marginLeft: '0.5rem', marginY: '0.5rem' }}
              >
                <Stack direction="row" textAlign="left" alignItems="center">
                  <Typography
                    sx={{
                      color: darkMode ? Colours.darkText : Colours.lightText,
                      fontSize: '1.3rem',
                      letterSpacing: '-1.5px',
                      fontFamily: 'Varela Round',
                    }}
                  >
                    Cooking
                  </Typography>
                  <PiCookingPotFill
                    style={{
                      fontSize: '1.3rem',
                      marginLeft: '0.5rem',
                      color: darkMode ? Colours.darkText : Colours.lightText,
                    }}
                  />
                </Stack>
                <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
                  Should you wish to use the kitchen at the hall, you must bring your own cooking
                  pots/pans and utensils.
                </Typography>
              </Stack>
              {/* sleeping */}
              <Stack
                direction="column"
                textAlign="left"
                sx={{ marginLeft: '0.5rem', marginY: '0.5rem' }}
              >
                <Stack direction="row" textAlign="left" alignItems="center">
                  <Typography
                    sx={{
                      color: darkMode ? Colours.darkText : Colours.lightText,
                      fontSize: '1.3rem',
                      letterSpacing: '-1.5px',
                      fontFamily: 'Varela Round',
                    }}
                  >
                    Sleeping
                  </Typography>
                  <FaBed
                    style={{
                      fontSize: '1.3rem',
                      marginLeft: '0.5rem',
                      color: darkMode ? Colours.darkText : Colours.lightText,
                    }}
                  />
                </Stack>
                <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
                  We suggest bringing a small air bed or roll mat as the floor can be quite hard.
                  There are a few smaller side rooms in the hall where you can sleep, as well as on
                  the stage area. You can sleep in the main hall if you wish, all we ask is you are
                  considerate to others. Snorers in the main hall will be drawn on, and/or play
                  buckaroo
                </Typography>
              </Stack>
              {/* social area */}
              <Stack
                direction="column"
                textAlign="left"
                sx={{ marginLeft: '0.5rem', marginY: '0.5rem' }}
              >
                <Stack direction="row" textAlign="left" alignItems="center">
                  <Typography
                    sx={{
                      color: darkMode ? Colours.darkText : Colours.lightText,
                      fontSize: '1.3rem',
                      letterSpacing: '-1.5px',
                      fontFamily: 'Varela Round',
                    }}
                  >
                    Social Area
                  </Typography>
                  <MdChair
                    style={{
                      fontSize: '1.3rem',
                      marginLeft: '0.5rem',
                      color: darkMode ? Colours.darkText : Colours.lightText,
                    }}
                  />
                </Stack>
                <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
                  ShinyLAN has a social area where you can get away from the glow of your screen.
                  Play board games, enjoy the organised events such as the pub quiz or poker
                  tourney. Chairs & tables are provided
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Stack>
        {isViewerOpen && (
          <ReactSimpleImageViewer
            src={hallImages}
            currentIndex={pictureIndex}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
            backgroundStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
          />
        )}
      </Grid>

      {/* Padding right */}
      <Grid size={1} />
    </Grid>
  );
};

export default VenueInfo;
