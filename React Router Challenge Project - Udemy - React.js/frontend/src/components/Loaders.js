import { defer, json } from 'react-router-dom'

// Loader for Fetching the list of Events
async function fetchEvents() {
    try {
        const response = await fetch('http://localhost:8080/events')

        if (!response.ok) {
            throw new Error('Oops! Something went wrong while fetching events.')
        }

        const data = await response.json()
        return data.events

    } catch (error) {
        throw json({ message: error.message }, { status: 500 })
    }

}


// Loader for fetching details of an event
async function fetchEventDetails(eventID) {
    try {

        const response = await fetch(`http://localhost:8080/events/${eventID}`)

        if (!response.ok) {
            throw new Error('Oops! Something went wrong while fetching events.')
        }

        const data = await response.json()
        return data.event

    } catch (error) {
        throw json({ message: error.message }, { status: 500 })
    }

}

export function eventsLoader() {
    return defer({
        events: fetchEvents(),
    })
}

export async function eventDetailsLoader({ params }) {
    return defer({
        event: await fetchEventDetails(params.eventID)
    })
}
