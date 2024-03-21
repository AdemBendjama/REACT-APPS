import HomePage from './page/Home';
import ErrorPage from './page/Error';
import RootLayout from './page/Root';
import EventsPage from './page/Events';
import NewEventPage from './page/NewEvent';
import EditEventPage from './page/EditEvent';
import NewsletterPage from './page/Newsletter';
import EventRootLayout from './page/EventRoot';
import EventDetailPage from './page/EventDetail';
import { eventsLoader, eventDetailsLoader } from './components/Loader';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { authenticateUser, deleteEvent, saveEvent, submitNewsLetter } from './components/Actions';
import AuthenticationPage from './page/Authentication';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ':eventID',
            id: 'event-detail',
            loader: eventDetailsLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEvent },
              { path: 'edit', element: <EditEventPage />, action: saveEvent }
            ]
          },
          { path: 'new', element: <NewEventPage />, action: saveEvent },
        ]
      },
      { path: 'newsletter', element: <NewsletterPage />, action: submitNewsLetter },
      { path: 'auth', element: <AuthenticationPage />, action: authenticateUser }
    ]
  }
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );

}

export default App;
