import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { cartActions } from './store/cart';

function App() {
  const cartIsVisible = useSelector(state => state.cart.showCart)
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://react-http-43d61-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json',
        {
          method: 'GET',
        })
      if (!response.ok) {
        return
      }
      const data = await response.json()

      const itemsFetched = []

      for (const key in data) {
        const item = {
          id: data[key].id,
          title: data[key].title,
          quantity: data[key].quantity,
          price: data[key].price
        }
        itemsFetched.push(item)
      }

      dispatch(cartActions.replace({ cartItems: itemsFetched }))
    }

    fetchData()

  }, [dispatch])
  useEffect(() => {
    fetch('https://react-http-43d61-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json',
      {
        method: 'PUT',
        body: JSON.stringify(cartItems),
      })
  }, [cartItems])

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
