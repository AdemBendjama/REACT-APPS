import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  return (
    <Section>

      <TaskForm onAddTask={props.onAddTask} />

    </Section>
  );
};

export default NewTask;
