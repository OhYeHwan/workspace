import { Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import KDBSetting from './pages/KDBSetting';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Login /> },
            { path: '404', element: <NotFound /> },
            { path: '*', element: <Navigate to="/404" /> },
            { path: 'KDBSetting', element: <KDBSetting /> }
        ]
    }
];

export default routes;