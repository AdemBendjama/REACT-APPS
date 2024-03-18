import React from 'react'
import MainHeader from '../components/MainHeader'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <>
            <MainHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout
