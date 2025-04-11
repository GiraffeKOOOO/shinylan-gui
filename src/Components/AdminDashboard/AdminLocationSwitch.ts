import { NavigateFunction } from 'react-router';
import { AdminDashboardTabs } from 'Components/Shared/Types';

const AdminLocationSwitch = (page: AdminDashboardTabs, navigate: NavigateFunction) => {
  switch (page) {
    case AdminDashboardTabs.Overview:
      navigate('/admin');
      break;
    case AdminDashboardTabs.Events:
      navigate('/admin/events');
      break;
    case AdminDashboardTabs.Venues:
      navigate('/admin/venues');
      break;
    case AdminDashboardTabs.EventProducts:
      navigate('/admin/event-products');
      break;
    case AdminDashboardTabs.AllOrders:
      navigate('/admin/orders');
      break;
    case AdminDashboardTabs.Tickets:
      navigate('/admin/tickets');
      break;
    case AdminDashboardTabs.Addons:
      navigate('/admin/addons');
      break;
    case AdminDashboardTabs.Merchandise:
      navigate('/admin/merchandise');
      break;
    case AdminDashboardTabs.Users:
      navigate('/admin/users');
      break;
    default:
      navigate('/admin');
  }
};

export default AdminLocationSwitch;
