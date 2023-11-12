import { lazy } from 'react';

const ExercisesPage = lazy(() => import('./ExercisesPage/ExercisesPage'));
const ExercisesSubcategoriesItem = lazy(() => import('./ExercisesPage/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem'));

const routes = {
  EXERCISES_ROUTE: '/exercises',
  EXERCISES_ROUTE_NAME: '/exercises/:name',
};


const appRoutes = [
    {
    path: routes.EXERCISES_ROUTE,
    element: <ExercisesPage />,
  },
  {
    path: `${routes.EXERCISES_ROUTE_NAME}`,
    element: <ExercisesSubcategoriesItem />,
  },
  // children: [
  //   {
  //     path: `${routes.EXERCISES_ROUTE}/:name`,
  //     element: <ExercisesSubcategoriesItem />,
  //   },
  // ],
]
export default appRoutes;