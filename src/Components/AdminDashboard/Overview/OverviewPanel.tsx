import { FC } from 'react';
import { Grid2 as Grid, Stack } from '@mui/material';
import UpcomingLanModule from 'Components/AdminDashboard/Overview/UpcomingLanModule';
import UpcomingLanCostModule from 'Components/AdminDashboard/Overview/UpcomingLanCostModule';
import UpcomingLanSeatModule from 'Components/AdminDashboard/Overview/UpcomingLanSeatModule';
import UpcomingLanTicketModule from 'Components/AdminDashboard/Overview/UpcomingLanTicketModule';
import UpcomingLanAddonsModule from 'Components/AdminDashboard/Overview/UpcomingLanAddonsModule';
import { Event } from 'Components/Shared/Types';

type OverviewPanelProps = {
  darkMode: boolean;
  upcomingLan: Event;
};

const OverviewPanel: FC<OverviewPanelProps> = ({ darkMode, upcomingLan }) => {
  return (
    <Grid container sx={{ marginTop: '1rem' }}>
      {/* side panel */}
      <Grid size={3} sx={{ marginRight: '1rem' }}>
        <Stack direction="column" spacing={4}>
          {/* cost */}
          <UpcomingLanCostModule darkMode={darkMode} />
          {/* seats */}
          <UpcomingLanSeatModule darkMode={darkMode} upcomingLan={upcomingLan} />
        </Stack>
      </Grid>

      {/* dashboard content */}
      <Grid size={8}>
        <Stack direction="column" spacing={4}>
          {/* upcoming lan */}
          <UpcomingLanModule darkMode={darkMode} upcomingLan={upcomingLan} />
          {/* tickets + addons */}
          <Stack direction="row" spacing={4} justifyContent="space-evenly">
            <UpcomingLanTicketModule darkMode={darkMode} />
            <UpcomingLanAddonsModule darkMode={darkMode} />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default OverviewPanel;
