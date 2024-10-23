import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import {ContextData} from '../ContextApi/ContextApi'
import LogIn from "./LogIn";


const ProtectRoute = ({ element }) => {
    const { isAuthentication } = useContext(ContextData);
    return isAuthentication ? element : <LogIn />;
};

export default ProtectRoute;
