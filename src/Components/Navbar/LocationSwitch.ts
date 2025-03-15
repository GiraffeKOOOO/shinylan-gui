import Pages from 'Components/Shared/Pages';
import { NavigateFunction } from 'react-router';

const LocationSwitch = (buttonName: string, navigate: NavigateFunction) => {
  switch (buttonName) {
    case Pages.Home:
      navigate('/');
      break;
    case Pages.Events:
      navigate('/events');
      break;
    case Pages.Gallery:
      navigate('/gallery');
      break;
    case Pages.History:
      navigate('/history');
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
