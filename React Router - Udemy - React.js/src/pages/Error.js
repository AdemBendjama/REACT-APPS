import React from 'react'
import MainHeader from '../components/MainHeader'

function ErrorPage() {
    return (
        <>
            <MainHeader />
            <main>
                <h1>404 Error Has Occured !</h1>
                <p>failed to find the page you are looking for</p>
            </main>
        </>
    )
}

export default ErrorPage
