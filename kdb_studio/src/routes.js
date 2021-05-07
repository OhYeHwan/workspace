import EKDBLayout from './layouts/EKDB/EKDBLayout';
import EKDB from './pages/EKDB';

const routes = [
  {
    path: '/ekdb',
    element: <EKDBLayout />,
    children: [{ path: '/', element: <EKDB /> }],
  },
];

export default routes;
