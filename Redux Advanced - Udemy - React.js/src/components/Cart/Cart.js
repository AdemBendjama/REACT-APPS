import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const isEmpty = cartItems.length === 0


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {isEmpty &&
          <p>Your cart is currently empty.</p>
        }
        {!isEmpty &&
          cartItems.map(item => (
            <CartItem key={item.id}
              item={{ id: item.id, title: item.title, quantity: item.quantity, price: item.price }}
            />
          ))
        }
      </ul>
    </Card>
  );
};

export default Cart;
