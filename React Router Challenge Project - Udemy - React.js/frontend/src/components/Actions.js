import { json, redirect } from 'react-router-dom';

// Action for handling POST and PATCH operations
export async function saveEvent({ request, params }) {
    try {
        let url = 'http://localhost:8080/events';
        let redirectUrl = '/events';

        const data = await request.formData();
        const event = {
            title: data.get('title'),
            image: data.get('image'),
            date: data.get('date'),
            description: data.get('description'),
        };

        if (request.method === 'PATCH') {
            url += '/' + params.eventID;
            redirectUrl += '/' + params.eventID;
        }

        const response = await fetch(url, {
            method: request.method,
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 422) {
            return response
        }

        if (!response.ok) {
            throw new Error('Failed to save event data');
        }

        return redirect(redirectUrl);
    } catch (error) {
        throw json({ message: error.message }, { status: 500 });
    }
}

// Action for handling DELETE operation
export async function deleteEvent({ params }) {
    try {
        const url = `http://localhost:8080/events/${params.eventID}`;

        const response = await fetch(url, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete event');
        }

        return redirect('/events');

    } catch (error) {
        throw json({ message: error.message }, { status: 500 });
    }
}

export async function submitNewsLetter({ request, params }) {
    const data = await request.formData();
    const email = data.get('email');

    // send to backend newsletter server ...
    console.log(email);
    return { message: 'Signup successful!' };
}