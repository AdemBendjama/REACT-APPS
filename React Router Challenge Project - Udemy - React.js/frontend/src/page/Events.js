import React from 'react'
import EventsList from '../components/EventsList'

function EventsPage({ events }) {
    return (
        <EventsList events={events} />
    )
}

export default EventsPage
