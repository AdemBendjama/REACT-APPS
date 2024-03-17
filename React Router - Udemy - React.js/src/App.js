import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage'
import ProductsPage from './components/ProductsPage'

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
    { path: '/', element: <HomePage /> },
    { path: 'products', element: <ProductsPage /> }
  ]
)


function App() {
  return <RouterProvider router={router} />;
}
export default App;
