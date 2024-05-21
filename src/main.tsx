/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loader from './components/ui/Loader';

const Layout = lazy(() => import('./Layout'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Career = lazy(() => import('./pages/Career'));
const Services = lazy(() => import('./pages/Services'));
const ITSolutions = lazy(() => import('./pages/(services-pages)/IT-SOlutions'));
const HRSolutions = lazy(() => import('./pages/(services-pages)/HR-Solutions'));
const Internships = lazy(() => import('./pages/(services-pages)/Internships'));
const DigitalMarketing = lazy(
  () => import('./pages/(services-pages)/DigitalMarketing'),
);
const EmailMarketing = lazy(
  () => import('./pages/(blogs-pages)/EmailMarketing'),
);

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/career',
        element: <Career />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/services/it-solutions',
        element: <ITSolutions />,
      },
      {
        path: '/services/hr-solutions',
        element: <HRSolutions />,
      },
      {
        path: '/services/internships',
        element: <Internships />,
      },
      {
        path: '/services/digital-marketing',
        element: <DigitalMarketing />,
      },
      {
        path: '/blogs/understanding-email-marketing-and-its-importance-for-businesses',
        element: <EmailMarketing />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  </React.StrictMode>,
);
