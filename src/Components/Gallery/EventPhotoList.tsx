import { FC, useCallback, useEffect, useState } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Grid2 as Grid,
  Stack,
  Typography,
} from '@mui/material';
import { Event } from 'Components/Shared/Types';
import Colours from 'Components/Shared/Colours';
import ReactSimpleImageViewer from 'react-simple-image-viewer';

type EventPhotoListProps = {
  darkMode: boolean;
  event: Event;
};

const EventPhotoList: FC<EventPhotoListProps> = ({ darkMode, event }) => {
  const filteredEventGallery = event.gallery;
  const [gallery, setGallery] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pictureIndex, setPictureIndex] = useState<number>(-1);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setPictureIndex(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setPictureIndex(-1);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setGallery(filteredEventGallery);
      setLoading(false);
    }, 1000);
  }, [filteredEventGallery]);

  if (!event) return;

  return (
    <Grid container sx={{ marginTop: '1rem', marginBottom: '3rem' }}>
      {/* Padding left */}
      <Grid size={1} />

      {/* center column - main content */}
      <Grid size={10}>
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
            {event.type} {event.dateFrom.getFullYear()}
          </Typography>
          {/* List of images in a gallery */}
          <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
            {loading ? (
              <Grid size={12} sx={{ textAlign: 'center' }}>
                <CircularProgress />
              </Grid>
            ) : (
              gallery.map((image, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Stack direction="row" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
                    <Card sx={{ mx: '1rem' }}>
                      <CardActionArea
                        onClick={() => {
                          openImageViewer(index);
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="200"
                          width="200"
                          image={image}
                          alt="green iguana"
                        />
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Grid>
              ))
            )}
            {isViewerOpen && (
              <ReactSimpleImageViewer
                src={filteredEventGallery}
                currentIndex={pictureIndex}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
                backgroundStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
              />
            )}
          </Grid>
        </Stack>
      </Grid>

      {/* Padding right */}
      <Grid size={1} />
    </Grid>
  );
};

export default EventPhotoList;
