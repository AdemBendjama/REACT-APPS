import React, { useEffect } from 'react'
import MainNavigation from '../components/MainNavigation'
import { Outlet, useRouteLoaderData, useSubmit } from 'react-router-dom'
import { getTokenDuration } from '../util/auth'

function RootLayout() {
    const token = useRouteLoaderData('root')
    const submit = useSubmit()

    useEffect(() => {
        if (!token) {
            return
        }

        const duration = getTokenDuration()
        setTimeout(() => {
            submit(null, { action: '/logout', method: 'post' })
        }, duration);
    }, [submit, token])


    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout
