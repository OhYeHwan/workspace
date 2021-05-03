import { Navigate } from 'react-router-dom';
import KDBLayout from './components/KDBLayout';
import MainLayout from './components/MainLayout';
import UKLayout from './components/UKLayout';
import KDBSetting from './pages/KDBSetting';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import EditUK from './pages/EditUK';
import Account from './pages/Account';

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Login /> },
            { path: '404', element: <NotFound /> },
            { path: '*', element: <Navigate to="/404" /> },
        ]
    },
    {
        path: 'kdb',
        element: <KDBLayout />,
        children: [
            { path: '/', element: <KDBSetting /> },
            { path: '/account', element: <Account /> },
            { path: '*', element: <Navigate to = "/404" />}
        ]
    },
    {
        path: 'uk',
        element: <UKLayout />,
        children: [
            { path: '/', element: <EditUK /> },
            { path: '/account', element: <Account /> }
        ]
    }
];

export default routes;