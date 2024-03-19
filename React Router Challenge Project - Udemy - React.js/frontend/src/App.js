import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './page/Home';
import EventsPage from './page/Events';
import EventDetailPage from './page/EventDetail';
import NewEventPage from './page/NewEvent';
import EditEventPage from './page/EditEvent';
import RootLayout from './page/Root';
import EventRootLayout from './page/EventRoot';
import { eventsLoader } from './components/Loader';
import ErrorPage from './page/Error';

const events = [
  {
    "id": "e1",
    "title": "A dummy event",
    "date": "2023-02-22",
    "image": "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    "description": "Join this amazing event and connect with fellow developers."
  }
]

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
          { index: true, element: <EventsPage events={events} />, loader: eventsLoader },
          {
            path: ':eventID',
            children: [
              { index: true, element: <EventDetailPage events={events} /> },
              { path: 'edit', element: <EditEventPage /> }
            ]
          },
          { path: 'new', element: <NewEventPage /> },
        ]
      },
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
