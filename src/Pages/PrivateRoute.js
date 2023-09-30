import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
    const storedToken = localStorage.getItem('access_token');
    const isAuthenticated = storedToken !== null;
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <Outlet /> : null;
};

export default PrivateRoute;
