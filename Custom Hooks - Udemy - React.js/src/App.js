import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useFetch from './hooks/fetch-hook';

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, fetchRequest } = useFetch();

  const handleFetchData = (data) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  const fetchTasks = () => {
    fetchRequest(
      {
        url: 'https://react-http-43d61-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        method: 'GET'
      },
      handleFetchData
    );
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <React.Fragment>
      <NewTask onAddTask={setTasks} />
      <Tasks onDelete={setTasks} items={tasks} isLoading={isLoading} error={error} onFetch={fetchTasks} />
    </React.Fragment>
  );
}

export default App;
