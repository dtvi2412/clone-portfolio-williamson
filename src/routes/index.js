import { About, Contact, Home, Project } from '../pages';

export const routes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/projects',
    component: <Home />,
  },
  {
    path: '/projects/:name',
    component: <Project />,
  },
  {
    path: '/about',
    component: <About />,
  },
  {
    path: '/contact',
    component: <Contact />,
  },
];
