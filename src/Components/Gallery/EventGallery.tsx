import { FC } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Event } from 'Components/Shared/Types';
import { useNavigate } from 'react-router';

type EventGalleryProps = {
  event: Event;
};

const EventGallery: FC<EventGalleryProps> = ({ event }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ mx: '1rem' }}>
      <CardActionArea
        onClick={() => {
          navigate(`/event-gallery?id=${event.id}`);
        }}
      >
        <CardMedia
          component="img"
          height="300"
          width="300"
          image={event.galleryThumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="left">
            {event.type} {event.dateFrom.getFullYear()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventGallery;
