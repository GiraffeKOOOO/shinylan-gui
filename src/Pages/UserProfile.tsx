import { FC } from 'react';
import { Grid2 as Grid, useMediaQuery, useTheme } from '@mui/material';
import { useSearchParams } from 'react-router';
import { useDarkMode } from 'Context/useDarkMode';
import PageContainerGrid from 'Components/Shared/PageContainerGrid';
import Navbar from 'Components/Navbar/Navbar';
import Footer from 'Components/Footer/Footer';
import UserProfile from 'Components/UserProfile/UserProfile';
import { MockUsers } from '../../MockData';

const UserProfilePage: FC = () => {
  const [searchParams] = useSearchParams();
  const urlId = searchParams.get('id');
  const user = MockUsers.find((user) => user.id.toString() === urlId);

  const { darkMode } = useDarkMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (user) {
    return (
      <PageContainerGrid darkMode={darkMode}>
        <Grid size={12}>
          <Navbar darkMode={darkMode} isMobile={isMobile} />
        </Grid>

        <Grid size={12} sx={{ flexGrow: 1 }}>
          {/* Event Content */}
          <UserProfile darkMode={darkMode} user={user} />
        </Grid>

        <Grid size={12}>
          <Footer darkMode={darkMode} />
        </Grid>
      </PageContainerGrid>
    );
  } else {
    // display empty page
  }
};

export default UserProfilePage;
