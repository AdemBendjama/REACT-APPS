import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cartItems)

  const totalQuantity = cartItems.reduce(((sum, item) => sum + item.quantity), 0)

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
