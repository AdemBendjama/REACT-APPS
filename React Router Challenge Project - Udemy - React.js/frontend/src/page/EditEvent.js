import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'

function EditEventPage() {
    const { event } = useRouteLoaderData('event-detail')

    return (
        <EventForm method='patch' event={event} />
    )
}

export default EditEventPage
