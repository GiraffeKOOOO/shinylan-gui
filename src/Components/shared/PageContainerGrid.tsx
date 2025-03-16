import { FC, ReactNode } from 'react';
import { Grid2 as Grid } from '@mui/material';
import Colours from 'Components/Shared/Colours';

type PageContainerGridProps = {
  darkMode: boolean;
  children: ReactNode;
};

const PageContainerGrid: FC<PageContainerGridProps> = ({ darkMode, children }) => {
  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: darkMode ? Colours.darkBackground : Colours.lightBackground,
      }}
      flexDirection="column"
    >
      {children}
    </Grid>
  );
};

export default PageContainerGrid;
