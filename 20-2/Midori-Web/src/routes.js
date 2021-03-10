import React from 'react';
import { Welcome, Search, Lists, Members, MemberData, NotFound } from 'pages';

const routes = [
  {
    path: '/',
    component: () => <Welcome />,
    exact: true,
  },
  {
    path: '/elections',
    component: () => <Search />,
    exact: true,
  },
  {
    // lists => elections/:election/lists
    path: '/elections/:election/lists',
    component: () => <Lists />,
    exact: true,
  },
  {
    // members => /elections/:election/lists/:list/
    path: '/elections/:election/lists/:list',
    component: () => <Members />,
    exact: true,
  },
  {
    // member =>
    path: '/elections/:election/lists/:list/:member',
    component: () => <MemberData />,
    exact: true,
  },
  {
    path: '*',
    component: () => <NotFound />,
    exact: true,
  },
];

export default routes;
