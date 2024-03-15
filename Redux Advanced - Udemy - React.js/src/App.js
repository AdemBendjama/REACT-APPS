import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartitems, putCartItems } from './store/cart-actions';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

function App() {
  const dispatch = useDispatch();

  const cartIsVisible = useSelector(state => state.ui.showCart);
  const cartItems = useSelector(state => state.cart.cartItems);
  const changed = useSelector(state => state.cart.changed)
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartitems())
  }, [dispatch]);

  useEffect(() => {
    dispatch(putCartItems({ cartItems, changed }))
  }, [cartItems, changed, dispatch]);

  return (
    <>
      {notification.active && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
