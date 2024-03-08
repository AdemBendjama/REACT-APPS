import { useRef } from 'react';

import classes from './TaskForm.module.css';
import useFetch from '../../hooks/fetch-hook';

const TaskForm = (props) => {
  const taskInputRef = useRef();
  const { error, isLoading, fetchRequest } = useFetch();

  const handleFetchData = (newTaskText, data) => {
    const createdTask = { id: data.name, text: newTaskText };
    console.log(createdTask);
    props.onAddTask((prevTasks) => [...prevTasks, createdTask]);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newTaskText = taskInputRef.current.value;

    if (newTaskText.trim().length > 0) {
      fetchRequest(
        {
          url: 'https://react-http-43d61-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
          method: 'POST',
          body: { text: newTaskText },
          headers: { 'Content-Type': 'application/json' }
        },
        handleFetchData.bind(null, newTaskText)
      );
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' ref={taskInputRef} />
      <button>{isLoading ? 'Sending...' : 'Add Task'}</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default TaskForm;
