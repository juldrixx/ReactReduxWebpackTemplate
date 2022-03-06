import React from 'react';
import {
  DashboardPage,
  DetailsPage,
  DummyPage,
  HomePage,
  ListingPage,
  LoginPage,
  ProfilePage,
  ErrorPage,
} from '../pages';

export default [
  {
    name: 'Home',
    element: <HomePage />,
    path: '/',
  },
  {
    name: 'Login',
    element: <LoginPage />,
    path: '/login',
  },
  {
    name: 'Dasboard',
    element: <DashboardPage />,
    path: '/dasboard',
  },
  {
    name: 'Listing',
    element: <ListingPage />,
    path: '/list',
  },
  {
    name: 'Profile',
    element: <ProfilePage />,
    path: '/me',
    children: [
      {
        name: 'Details',
        element: <DetailsPage />,
        path: '/me/details',
      },
    ],
  },
  {
    name: 'Dummy',
    element: <DummyPage />,
    path: '/dummy',
  },
  {
    name: 'Error',
    element: <ErrorPage />,
    path: '/error',
  },
];
