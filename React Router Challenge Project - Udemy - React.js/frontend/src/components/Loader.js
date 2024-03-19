import { json } from 'react-router-dom'

export async function eventsLoader() {
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

