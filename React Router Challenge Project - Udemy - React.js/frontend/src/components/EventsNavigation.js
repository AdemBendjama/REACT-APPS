import { NavLink, useRouteLoaderData } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  const token = useRouteLoaderData('root')

  const activeHandler = ({ isActive }) => {
    return isActive ? classes.active : ''
  }

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={activeHandler} to='/events' end>All Events</NavLink>
          </li>
          {token &&
            <li>
              <NavLink className={activeHandler} to='/events/new' end>New Event</NavLink>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
