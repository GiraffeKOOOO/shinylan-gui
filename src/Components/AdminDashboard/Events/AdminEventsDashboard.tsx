import { FC } from 'react';
import { Grid2 as Grid, Stack } from '@mui/material';
import { useRecoilState } from 'recoil';
import { sidePanelState } from 'Components/AdminDashboard/SidepanelState';
import AdminDashboardSidepanel from 'Components/AdminDashboard/AdminDashboardSidepanel';
import { useLocation } from 'react-router';

type AdminEventsDashboardProps = {
  darkMode: boolean;
};

const AdminEventsDashboard: FC<AdminEventsDashboardProps> = ({ darkMode }) => {
  const [drawerHidden] = useRecoilState(sidePanelState);
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);
  const targetSegment = segments[1];

  return (
    <Grid container justifyContent="space-between" sx={{ height: 'calc(100vh - 100px)' }}>
      {/* side panel */}
      <Grid size={drawerHidden ? 0.4 : 1.3} sx={{ height: 'calc(100vh - 100px)' }}>
        <AdminDashboardSidepanel darkMode={darkMode} path={targetSegment} />
      </Grid>

      {/* dashboard content */}
      <Grid size={drawerHidden ? 11.4 : 10.4} sx={{ height: '100vh' }}>
        <Stack direction="column" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
          {/* breadcrumb trail */}
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Stack direction="row" spacing={1}>
              <span>Admin</span>
              <span>/</span>
              <span>Events</span>
            </Stack>
            {/* <Button variant="contained">Create Order</Button> */}
            {/* search bar */}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AdminEventsDashboard;
