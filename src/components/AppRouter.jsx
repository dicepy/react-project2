import React, {useContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import {publicRoutes, privateRoutes} from "../router/Routes";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";



const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading){
        return <Loader/>
    }

    return (
        isAuth
            ?<Routes>
                {privateRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                    />
                ))}

            </Routes>
            :<Routes>
                {publicRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                    />
                ))}

            </Routes>

    );
};

export default AppRouter;
