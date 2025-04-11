import { FC, useState } from 'react';
import {
  Card,
  Divider,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import Colours from 'Components/Shared/Colours';
import { AdminDashboardTabs } from 'Components/Shared/Types';
import { TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb';
import { TbLayoutSidebarRightCollapseFilled } from 'react-icons/tb';
import SidePanelNavButton from 'Components/AdminDashboard/SidePanelNavButton';

type AdminDashboardProps = {
  darkMode: boolean;
};

const AdminDashboard: FC<AdminDashboardProps> = ({ darkMode }) => {
  const [drawerHidden, setDrawerHidden] = useState<boolean>(false);

  return (
    <Grid container justifyContent="space-between" sx={{ height: 'calc(100vh - 100px)' }}>
      {/* side panel */}
      <Grid size={drawerHidden ? 0.4 : 1.3} sx={{ height: 'calc(100vh - 100px)' }}>
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
          <Stack direction="column" justifyContent="space-between" sx={{ height: '100%' }}>
            <Stack>
              {/* overview */}
              <SidePanelNavButton
                darkMode={darkMode}
                drawerHidden={drawerHidden}
                button={AdminDashboardTabs.Overview}
              />

              <Divider />

              {/* Events */}
              <List>
                {!drawerHidden && (
                  <Typography
                    textAlign="left"
                    sx={{
                      fontSize: '0.8rem',
                      marginLeft: '1rem',
                      color: darkMode ? Colours.darkTextHover : Colours.faqAccordionBorderGrey,
                    }}
                  >
                    Events
                  </Typography>
                )}
                {[
                  AdminDashboardTabs.Events,
                  AdminDashboardTabs.Venues,
                  AdminDashboardTabs.EventProducts,
                ].map((value, index) => (
                  <ListItem disablePadding key={index}>
                    <SidePanelNavButton
                      darkMode={darkMode}
                      drawerHidden={drawerHidden}
                      button={value}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider />

              {/* Orders */}
              <List>
                {!drawerHidden && (
                  <Typography
                    textAlign="left"
                    sx={{
                      fontSize: '0.8rem',
                      marginLeft: '1rem',
                      color: darkMode ? Colours.darkTextHover : Colours.faqAccordionBorderGrey,
                    }}
                  >
                    Orders
                  </Typography>
                )}
                {[
                  AdminDashboardTabs.AllOrders,
                  AdminDashboardTabs.Tickets,
                  AdminDashboardTabs.Addons,
                  AdminDashboardTabs.Merchandise,
                ].map((value, index) => (
                  <ListItem disablePadding key={index}>
                    <SidePanelNavButton
                      darkMode={darkMode}
                      drawerHidden={drawerHidden}
                      button={value}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider />

              {/* Users */}
              <List>
                {!drawerHidden && (
                  <Typography
                    textAlign="left"
                    sx={{
                      fontSize: '0.8rem',
                      marginLeft: '1rem',
                      color: darkMode ? Colours.darkTextHover : Colours.faqAccordionBorderGrey,
                    }}
                  >
                    Users
                  </Typography>
                )}
                {[AdminDashboardTabs.Users].map((value, index) => (
                  <ListItem disablePadding key={index}>
                    <SidePanelNavButton
                      darkMode={darkMode}
                      drawerHidden={drawerHidden}
                      button={value}
                    />
                  </ListItem>
                ))}
              </List>
            </Stack>

            <Stack>
              {/* collapse */}
              <ListItemButton
                sx={{ marginY: 'auto' }}
                onClick={() => {
                  setDrawerHidden(!drawerHidden);
                }}
              >
                {drawerHidden && (
                  <TbLayoutSidebarRightCollapseFilled
                    size={25}
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                  />
                )}
                {!drawerHidden && (
                  <>
                    <TbLayoutSidebarLeftCollapseFilled
                      size={18}
                      style={{
                        marginRight: '0.5rem',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                      }}
                    />
                    <ListItemText>Hide</ListItemText>
                  </>
                )}
              </ListItemButton>
            </Stack>
          </Stack>
        </Card>
      </Grid>

      {/* dashboard content */}
      <Grid size={drawerHidden ? 11.4 : 10.4} sx={{ height: '100vh' }}>
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
