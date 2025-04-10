import { createBrowserRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { DarkModeProvider } from './Context/DarkModeContext';
import Home from 'Pages/Home';
import Event from 'Pages/Event';
import Events from 'Pages/Events';
import EventGallery from 'Pages/EventGallery';
import Gallery from 'Pages/Gallery';
import About from 'Pages/About';
import Faq from 'Pages/Faq';
import Contact from 'Pages/Contact';
import TermsAndConditions from 'Pages/TermsAndConditions';
import UserProfile from 'Pages/UserProfile';
import OrderHistory from 'Pages/OrderHistory';
import './App.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/event',
    element: <Event />,
  },
  {
    path: '/events',
    element: <Events />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/event-gallery',
    element: <EventGallery />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/faq',
    element: <Faq />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/terms-and-conditions',
    element: <TermsAndConditions />,
  },
  {
    path: '/user-profile',
    element: <UserProfile />,
  },
  {
    path: '/order-history',
    element: <OrderHistory />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <DarkModeProvider>
          <RouterProvider router={router} />
        </DarkModeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
