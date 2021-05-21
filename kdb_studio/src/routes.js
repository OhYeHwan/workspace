import EKDBLayout from './layouts/EKDB/EKDBLayout';
import UKLayout from './layouts/UK/UKLayout';
import EKDB from './pages/EKDB';
import UK from './pages/UK';
import ExPage from './pages/ExPage';

const routes = [
  {
    path: '/ekdb',
    element: <EKDBLayout />,
    children: [{ path: '/', element: <EKDB /> }],
  },
  {
    path: '/uk',
    element: <UKLayout />,
    children: [{ path: '/', element: <UK /> }],
  },
  {
    path: '/ex',
    element: <UKLayout />,
    children: [{ path: '/', element: <ExPage /> }],
  },
];

export default routes;
