import Spinner from '../../assets/Spinner';
import Section from '../UI/Section';
import DeleteTask from './DeleteTask';
import TaskItem from './TaskItem';
import classes from './Tasks.module.css';

const Tasks = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <div key={task.id}>
            <TaskItem key={task.id}>{task.text}</TaskItem>
            <DeleteTask taskID={task.id} onDelete={props.onDelete} />
          </div>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.isLoading) {
    content = <Spinner />;
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
