import React from 'react'
import useFetch from '../../hooks/fetch-hook'
import Spinner from '../../assets/Spinner'

function DeleteTask(props) {

    const { error, isLoading, fetchRequest } = useFetch()


    const handleDeletedTask = (taskID) => {
        props.onDelete(prevTasks => prevTasks.filter(task => task.id !== taskID))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchRequest({
            url: `https://react-http-43d61-default-rtdb.europe-west1.firebasedatabase.app/tasks/${props.taskID}.json`,
            method: 'DELETE',
        }, handleDeletedTask.bind(null, props.taskID))
    }

    return (
        <>
            {!isLoading ? (
                <form onSubmit={handleSubmit}>
                    <button>Delete</button>
                </form>
            )
                : <Spinner />
            }
            {error && <p>error</p>}

        </>


    )
}

export default DeleteTask
