import { FC } from 'react';
import { Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import Colours from 'Components/Shared/Colours';

type UpcomingLanCostModuleProps = {
  darkMode: boolean;
};

const UpcomingLanCostModule: FC<UpcomingLanCostModuleProps> = () => {
  // get upcoming lan
  // function for sorting through orders of the lan id
  // return values
  const venueCost = 100;
  const totalCost = venueCost;
  const ticketsPurchased = 100;
  const addonsPurchased = 100;
  const totalIncome = ticketsPurchased + addonsPurchased;
  const lanTotal = totalIncome - totalCost;

  const dataset = [
    {
      category: 'Cost',
      cost: totalCost,
    },
    {
      category: 'Income',
      tickets: ticketsPurchased,
      addons: addonsPurchased,
    },
  ];

  return (
    <Card sx={{ border: `1px solid ${Colours.cardBorderGrey}`, height: '328px' }}>
      <CardActionArea
        // TODO: make card navigate to the upcoming LAN
        onClick={() => {
          console.log(`Navigating to the Next LAN`);
        }}
      >
        <Stack direction="row" sx={{ paddingY: '1rem', marginTop: '1rem' }} justifyContent="center">
          <Stack direction="row" spacing={4}>
            <Stack direction="column">
              <Typography sx={{ fontSize: '2rem' }}>Total</Typography>
              <Typography sx={{ fontSize: '1.6rem' }}>£ {lanTotal}</Typography>
            </Stack>
            <Stack direction="column" justifyContent="center">
              <Typography textAlign="left">Tickets purchased: £{ticketsPurchased}</Typography>
              <Typography textAlign="left">Addons purchased: £{addonsPurchased}</Typography>
              <Typography textAlign="left">Venue cost: £{venueCost}</Typography>
            </Stack>
          </Stack>
        </Stack>
        <CardContent sx={{ paddingTop: '0', marginTop: '-1rem' }}>
          <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'category' }]}
            series={[
              { dataKey: 'cost', color: '#e57373' },
              { dataKey: 'tickets', stack: 'income', color: '#64b5f6' },
              { dataKey: 'addons', stack: 'income', color: '#81c784' },
            ]}
            layout="horizontal"
            width={400}
            height={200}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UpcomingLanCostModule;
