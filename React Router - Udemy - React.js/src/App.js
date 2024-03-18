import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import RootLayout from "./pages/Root";
import ProductsDetailsPage from "./pages/ProductsDetails";
import ErrorPage from "./pages/Error";

// Alternative way to define routes with Route
// import { Route, createRoutesFromElements } from "react-router-dom";

// const routeDefinitions = createRoutesFromElements(
//   <Route>

//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="products" element={<ProductsPage />}></Route>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'products',
          children: [
            { index: true, element: <ProductsPage /> },
            { path: ':productID', element: <ProductsDetailsPage /> }
          ]
        },
      ]
    }
  ]
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
