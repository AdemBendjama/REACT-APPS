import React from 'react';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
    const error = useRouteError();
    let title = 'Undefined Error';
    let message = 'Something went wrong. Please try again later.';

    if (error.status === 500) {
        title = 'Server Error 500';
        message = 'Oops! Something went wrong on our server. We are working to fix it. Please try again later.';
    }

    if (error.status === 404) {
        title = 'Page Not Found 404';
        message = 'The page you are looking for does not exist.';
    }

    if (error.data && error.data.message) {
        message = error.data.message;
    }

    return (
        <>
            <MainNavigation />
            <main>
                <h1>{title}</h1>
                <p>{message}</p>
            </main>
        </>
    );
}

export default ErrorPage;
