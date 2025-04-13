import { FC } from 'react';
import { Grid2 as Grid, Stack } from '@mui/material';
import { useRecoilState } from 'recoil';
import { sidePanelState } from 'Components/AdminDashboard/SidepanelState';
import AdminDashboardSidepanel from 'Components/AdminDashboard/AdminDashboardSidepanel';
import OverviewPanel from 'Components/AdminDashboard/Overview/OverviewPanel';
import { MockEvents } from '../../../MockData';

type AdminDashboardProps = {
  darkMode: boolean;
};

const AdminDashboard: FC<AdminDashboardProps> = ({ darkMode }) => {
  const [drawerHidden] = useRecoilState(sidePanelState);
  const currentDate = new Date();
  const upcomingLan = MockEvents.filter(
    (event) => event.dateFrom >= currentDate && !event.finished,
  ).sort((a, b) => a.dateFrom.getTime() - b.dateFrom.getTime())[0];

  return (
    <Grid container justifyContent="space-between" sx={{ height: 'calc(100vh - 100px)' }}>
      {/* side panel */}
      <Grid size={drawerHidden ? 0.4 : 1.3} sx={{ height: 'calc(100vh - 100px)' }}>
        <AdminDashboardSidepanel darkMode={darkMode} path="overview" />
      </Grid>

      {/* dashboard content */}
      <Grid size={drawerHidden ? 11.4 : 10.4} sx={{ height: '100vh' }}>
        <Stack direction="column" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
          {/* TODO: turn this in to an actualy component breadcrumb trail */}
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Stack direction="row" spacing={1}>
              <span>Admin</span>
              <span>/</span>
              <span>Overview</span>
            </Stack>
            {/* search bar */}
          </Stack>
          <OverviewPanel darkMode={darkMode} upcomingLan={upcomingLan} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
