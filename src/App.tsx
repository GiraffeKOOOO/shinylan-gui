import { createBrowserRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkModeProvider } from './Context/DarkModeContext';
import Home from 'Pages/Home';
import Event from 'Pages/Event';
import Events from 'Pages/Events';
import Gallery from 'Pages/Gallery';
import History from 'Pages/History';
import Faq from 'Pages/Faq';
import Contact from 'Pages/Contact';
import './App.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/event/:id',
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
    path: '/history',
    element: <History />,
  },
  {
    path: '/faq',
    element: <Faq />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
