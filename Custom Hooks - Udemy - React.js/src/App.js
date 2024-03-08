import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useFetch from './hooks/fetch-hook';

function App() {
  const { tasks, isLoading, error, fetchTasks } = useFetch()

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <React.Fragment>
      <NewTask onAddTask={fetchTasks} error={error} isLoading={isLoading} />
      <Tasks
        items={tasks}
        isLoading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
