import { useState } from 'react';

function useFetch() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async (newTaskText = undefined) => {
        const requestType = newTaskText === undefined ? 'GET' : 'POST'

        setIsLoading(true);
        setError(null);
        try {
            const requestOptions = {
                method: requestType
            }

            if (requestType === 'POST') {
                requestOptions.body = JSON.stringify({ text: newTaskText })
                requestOptions.headers = { 'Content-Type': 'application/json' }
            }

            const response = await fetch(
                'https://react-http-43d61-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
                requestOptions
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();


            if (requestType === 'GET') {
                const loadedTasks = [];

                for (const taskKey in data) {
                    loadedTasks.push({ id: taskKey, text: data[taskKey].text });
                }

                setTasks(loadedTasks);
            } else {

                const generatedId = data.name; // firebase-specific => "name" contains generated id
                const createdTask = { id: generatedId, text: newTaskText };

                setTasks((prevTasks) => [...prevTasks, createdTask]);
            }

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };


    return {
        tasks,
        isLoading,
        error,
        fetchTasks
    };
}

export default useFetch;
