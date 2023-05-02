import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom'; 

const PrivateRoutes = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="w-full relative mx-auto my-20"><progress className="progress w-1/5 mx-auto absolute inset-x-0 top-0 h-10"></progress></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoutes;