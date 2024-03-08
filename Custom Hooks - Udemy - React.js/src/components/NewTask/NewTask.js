import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  return (
    <Section>
      <TaskForm onAddTask={props.onAddTask} loading={props.isLoading} />
      {props.error && <p>{props.error}</p>}
    </Section>
  );
};

export default NewTask;
