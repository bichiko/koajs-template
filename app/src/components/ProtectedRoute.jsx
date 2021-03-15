import React, {useEffect, useState,} from 'react';
import {Redirect, Route} from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';
import {useHistory} from 'react-router';

const ProtectedRoute = (props) => {
    const [isAuth, isLoading, errorMessage] = useAuthStatus();
    const history = useHistory();

    useEffect(() => {
        console.log({
            isAuth, isLoading, errorMessage, history
        })
        if (isAuth) {
            // console.log(history);
        }
    }, [isAuth, isLoading, errorMessage]);

    return !isAuth && !isLoading ?
        <Redirect to={{
            pathname: '/sign-in',
            state: {
                from: props.location
            }
        }}/> : <Route {...props}/>;
};

export default ProtectedRoute;