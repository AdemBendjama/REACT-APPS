import { useState } from 'react';

function useFetch() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRequest = async (requestParams, execute) => {
        const method = requestParams.method
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestParams.url,
                {
                    method: method,
                    body: requestParams.body ? JSON.stringify(requestParams.body) : null,
                    headers: requestParams.headers ? requestParams.headers : {}
                }

            );

            console.log(response);

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            let data = null

            if (method !== "DELETE") {
                data = await response.json();
            }

            execute(data);

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };

    return {
        isLoading,
        error,
        fetchRequest
    };
}

export default useFetch;
