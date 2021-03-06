import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./container/Home'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
  {
    path: '/CardFilm',
    exact: true,
    component: asyncComponent({
      loader: () => import('./container/CardFilm'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
  {
    path: '/people',
    exact: true,
    component: asyncComponent({
      loader: () => import('./container/CardUser'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
];
