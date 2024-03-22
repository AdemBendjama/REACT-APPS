import React, { Suspense } from 'react'
import EventItem from '../components/EventItem'
import { Await, useRouteLoaderData } from 'react-router-dom'

function EventDetailPage() {
    const { event } = useRouteLoaderData("event-detail")

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={event}>
                {(event) => <EventItem event={event} />}
            </Await>
        </Suspense>
    )
}

export default EventDetailPage
