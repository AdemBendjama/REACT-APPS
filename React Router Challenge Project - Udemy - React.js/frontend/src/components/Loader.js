import { json } from 'react-router-dom'

// Loader for Fetching the list of Events
export async function fetchEvents() {
    try {
        const response = await fetch('http://localhost:8080/events')

        if (!response.ok) {
            throw new Error('Oops! Something went wrong while fetching events.')
        }

        return response

    } catch (error) {
        throw json({ message: error.message }, { status: 500 })
    }

}

// Loader for fetching details of an event
export async function fetchEventDetails({ params }) {

    try {
        const response = await fetch(`http://localhost:8080/events/${params.eventID}`)

        if (!response.ok) {
            throw new Error('Oops! Something went wrong while fetching events.')
        }

        return response

    } catch (error) {
        throw json({ message: error.message }, { status: 500 })
    }

}

