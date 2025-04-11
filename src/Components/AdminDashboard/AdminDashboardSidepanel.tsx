import { FC } from 'react';
import {
  Card,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useRecoilState } from 'recoil';
import { AdminDashboardTabs } from 'Components/Shared/Types';
import { TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb';
import { TbLayoutSidebarRightCollapseFilled } from 'react-icons/tb';
import { sidePanelState } from 'Components/AdminDashboard/SidepanelState';
import SidePanelNavButton from 'Components/AdminDashboard/SidePanelNavButton';
import Colours from 'Components/Shared/Colours';

type AdminDashboardSidepanelProps = {
  darkMode: boolean;
  path: string;
};

const AdminDashboardSidepanel: FC<AdminDashboardSidepanelProps> = ({ darkMode, path }) => {
  const [drawerHidden, setDrawerHidden] = useRecoilState(sidePanelState);

  return (
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
            index={0}
            darkMode={darkMode}
            drawerHidden={drawerHidden}
            button={AdminDashboardTabs.Overview}
            path={path}
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
              <SidePanelNavButton
                index={index}
                darkMode={darkMode}
                drawerHidden={drawerHidden}
                button={value}
                path={path}
              />
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
              <SidePanelNavButton
                index={index}
                darkMode={darkMode}
                drawerHidden={drawerHidden}
                button={value}
                path={path}
              />
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
              <SidePanelNavButton
                index={index}
                darkMode={darkMode}
                drawerHidden={drawerHidden}
                button={value}
                path={path}
              />
            ))}
          </List>
        </Stack>

        <Stack>
          {/* collapse */}
          <ListItemButton
            sx={{
              marginY: 'auto',
              '&:hover': {
                backgroundColor: darkMode ? Colours.lightBackground : Colours.lightBackgroundFooter,
              },
            }}
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
  );
};

export default AdminDashboardSidepanel;
