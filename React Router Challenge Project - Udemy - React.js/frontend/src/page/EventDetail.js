import React from 'react'
import EventItem from '../components/EventItem'
import { useRouteLoaderData } from 'react-router-dom'

function EventDetailPage() {
    const { event } = useRouteLoaderData("event-detail")

    return (
        <EventItem event={event} />
    )
}

export default EventDetailPage
