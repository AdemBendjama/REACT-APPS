import React from 'react'
import EventItem from '../components/EventItem'
import { useParams } from 'react-router-dom'

function EventDetailPage({ events }) {
    const params = useParams()
    const event = events.find(item => item.id === params.eventID)

    return (
        <EventItem event={event} />
    )
}

export default EventDetailPage
