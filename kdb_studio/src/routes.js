import EKDBLayout from './layouts/EKDB/EKDBLayout';
import UKLayout from './layouts/UK/UKLayout';
import EKDB from './pages/EKDB';
import UK from './pages/UK';

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
];

export default routes;
