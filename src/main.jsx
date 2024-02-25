import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landlord from './components/Landlord.jsx';
import Tennant from './components/Tennant.jsx';
import Listings from './components/Listings.jsx';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/landlord',
    element: <Landlord />,
  },
  {
    path: '/tennant',
    element: <Tennant />,
  },
  {
    path: '/listings',
    element: <Listings />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
