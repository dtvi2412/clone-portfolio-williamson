import { Home, Project } from '../pages';

export const routes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/projects/:name',
    component: <Project />,
  },
];
