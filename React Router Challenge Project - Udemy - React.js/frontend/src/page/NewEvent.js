import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'
import { useNavigateIf } from '../hooks/navigate-hook'

function NewEventPage() {
    const token = useRouteLoaderData('root')
    useNavigateIf('/auth/?mode=login', !token)

    return (
        <>
            {token &&
                <EventForm method='post' />
            }
        </>
    )
}

export default NewEventPage
