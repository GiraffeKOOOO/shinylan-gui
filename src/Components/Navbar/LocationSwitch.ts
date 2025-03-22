import { NavigateFunction } from 'react-router';
import { Pages } from 'Components/Shared/Types';

const LocationSwitch = (page: Pages, navigate: NavigateFunction) => {
  switch (page) {
    case Pages.Home:
      navigate('/');
      break;
    case Pages.Events:
      navigate('/events');
      break;
    case Pages.Gallery:
      navigate('/gallery');
      break;
    case Pages.About:
      navigate('/about');
      break;
    case Pages.Faq:
      navigate('/faq');
      break;
    case Pages.Contact:
      navigate('/contact');
      break;
    default:
      navigate('/');
  }
};

export default LocationSwitch;
