import React, { Suspense } from 'react'
import EventsList from '../components/EventsList'
import { Await, useLoaderData } from 'react-router-dom'

function EventsPage() {
    const { events } = useLoaderData()

    return (
        <Suspense fallback={<p>Loading...</p>} >
            <Await resolve={events} >
                {(events) => {
                    return (<EventsList events={events} />)
                }}
            </Await>
        </Suspense>

    )
}

export default EventsPage

