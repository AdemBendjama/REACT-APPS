import { json, redirect } from 'react-router-dom';
import { getAuthToken } from '../util/auth';

// Action for handling POST and PATCH operations
export async function saveEvent({ request, params }) {
    let errorStatus = 500
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
        const authToken = getAuthToken()
        const response = await fetch(url, {
            method: request.method,
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'hehe ' + authToken
            }
        });

        if (response.status === 422) {
            return response
        }

        if (response.status === 401) {
            errorStatus = 401
            throw new Error('Failed to save event data');
        }

        if (!response.ok) {
            throw new Error('Failed to save event data');
        }

        return redirect(redirectUrl);
    } catch (error) {
        throw json({ message: error.message }, { status: errorStatus });
    }
}

// Action for handling DELETE operation
export async function deleteEvent({ params }) {
    let errorStatus = 500
    try {
        const url = `http://localhost:8080/events/${params.eventID}`;

        const response = await fetch(url, {
            method: 'DELETE',
        });

        if (response.status === 401) {
            errorStatus = 401
            throw new Error('Failed to delete event');
        }

        if (!response.ok) {
            throw new Error('Failed to delete event');
        }

        return redirect('/events');

    } catch (error) {
        throw json({ message: error.message }, { status: errorStatus });
    }
}

export async function submitNewsLetter({ request, params }) {
    const data = await request.formData();
    const email = data.get('email');

    // send to backend newsletter server ...
    console.log(email);
    return { message: 'Signup successful!' };
}

export async function authenticateUser({ request }) {
    let errorstatus = 500
    try {
        const searchParams = new URL(request.url).searchParams
        const mode = searchParams.get('mode') || 'login'

        if (mode !== 'login' && mode !== 'signup') {
            errorstatus = 422
            throw new Error('Unsupported Mode');
        }

        const formData = await request.formData();
        const authData = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        const url = `http://localhost:8080/` + mode;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authData)
        });

        if (response.status === 422 || response.status === 401) {
            return response
        }

        if (!response.ok) {
            throw new Error('Failed To Login/Signup');
        }

        const data = await response.json()
        const token = data.token
        localStorage.setItem('token', token)

        return redirect('/');

    } catch (error) {
        throw json({ message: error.message }, { status: errorstatus });
    }
}