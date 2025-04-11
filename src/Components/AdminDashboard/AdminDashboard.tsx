import { FC } from 'react';
import {
  Card,
  Divider,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import Colours from 'Components/Shared/Colours';
import { AdminDashboardTabs } from 'Components/Shared/Types';
import { FaHome } from 'react-icons/fa';

type AdminDashboardProps = {
  darkMode: boolean;
};

const AdminDashboard: FC<AdminDashboardProps> = ({ darkMode }) => {
  return (
    <Grid container justifyContent="space-between">
      {/* side panel */}
      <Grid size={1.5} sx={{ height: '100vh' }}>
        <Card
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '0',
            borderRight: `1px solid ${darkMode ? Colours.darkText : Colours.cardBorderGrey}`,
            borderTop: `1px solid ${darkMode ? Colours.darkText : Colours.cardBorderGrey}`,
            backgroundColor: darkMode ? Colours.darkBackgroundFooter : Colours.darkText,
          }}
          role="presentation"
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText>Overview</ListItemText>
                <FaHome size={22} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            {[AdminDashboardTabs.Events, 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>asds</List>
        </Card>
      </Grid>

      {/* dashboard content */}
      <Grid size={10.2} sx={{ height: '100vh' }}>
        <Stack direction="column" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
          {/* breadcrumb trail */}
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Stack direction="row" spacing={1}>
              <span>Admin</span>
              <span>/</span>
              <span>Orders</span>
            </Stack>
            {/* <Button variant="contained">Create Order</Button> */}
            {/* search bar */}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
