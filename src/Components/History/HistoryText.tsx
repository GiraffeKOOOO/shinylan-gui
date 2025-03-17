import { FC } from 'react';
import { Grid2 as Grid, Stack, Typography } from '@mui/material';
import Colours from 'Components/Shared/Colours';

type HistoryTextProps = {
  darkMode: boolean;
};

const HistoryText: FC<HistoryTextProps> = ({ darkMode }) => {
  return (
    <Grid container sx={{ marginTop: '1rem', marginBottom: '2rem' }}>
      {/* Padding left */}
      <Grid size={2} />

      {/* center column - main content */}
      <Grid size={8}>
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
            History
          </Typography>
          {/* event cards */}
          <Typography sx={{ marginY: '0.5rem' }} align="left">
            Back in the primordial soup that was the beginning of the millenium a bunch of teenage
            gamers decided to gather at Wincanton Memorial Hall in Somerset with our PC's, piles of
            network cables, a few switches and a tangle of extension cables. The year was 2001, the
            internet was full of squealing, monitors were heavy and none of us could drive.
            Somerset's bring your own computer (BYOC) LAN Party was born. From those humble
            beginnings we hosted several more gaming events with the help of Gigabits and we called
            ourselves ShinyLorry because... umm, just because.
          </Typography>
          <Typography sx={{ marginY: '0.7rem' }} align="left">
            From 2004 we decided to call ourselves ShinyLAN to avoid confusion with transport
            enthusiasts. At the same time many of the original crew went to university all over the
            country to pretend to learn about things for a bit while mostly getting drunk (with
            exceptions). Serveral different lovable reprobates stepped up over the years to help
            organise the events and LANs continued in Wincanton on our usual family unfriendly dates
            over Easter, August Bank Holiday and Boxing Day. We've had gamers attend from mainland
            Europe, others who live close enough to the venue to stumble home for a shower and real
            bed (shame on them). As the years have gone by our LAN Parties have become much more
            than just a room full of PC's linked up chasing frags. We are a large group of friends
            and we welcome like minded people to our laid back interpretation of what a LAN Party
            should be. We pride ourselves on our reputation as the social LAN.
          </Typography>
          <Typography sx={{ marginY: '0.5rem' }} align="left">
            A special mention to previous staff and crew that helped make the LANs happen: Matt
            (Intim), Rich (Excalibur), Lawrence (Mupet), Chris (Spud) and Ed (EdTheProfet). And much
            love to all those that attendend over the years, we'll see you next time!
          </Typography>
        </Stack>
      </Grid>

      {/* Padding right */}
      <Grid size={2} />
    </Grid>
  );
};

export default HistoryText;
