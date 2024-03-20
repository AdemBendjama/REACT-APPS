import { Form, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate()
  const navigation = useNavigation()
  const data = useActionData()

  const isSubmitting = navigation.state === 'submitting'
  const isLoading = navigation.state === 'loading'
  const buttonState = isSubmitting ? 'Saving...' : 'Save'

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''} />
        <span>{data && data.errors.title && data.errors.title}</span>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''} />
        <span>{data && data.errors.image && data.errors.image}</span>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''} />
        <span>{data && data.errors.date && data.errors.date}</span>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''} />
        <span>{data && data.errors.description && data.errors.description}</span>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting || isLoading} >{buttonState}</button>
      </div>

    </Form>
  );
}

export default EventForm;
