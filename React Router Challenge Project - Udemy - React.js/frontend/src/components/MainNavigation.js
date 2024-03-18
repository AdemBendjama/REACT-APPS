import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const activeHandler = ({ isActive }) => {
    return isActive ? classes.active : ''
  }

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to={'/'} className={activeHandler}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/events'} className={activeHandler}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
