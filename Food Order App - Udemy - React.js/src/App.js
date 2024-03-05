import React, { useContext } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/cart-context";


function App() {

  const { cartIsVisible } = useContext(CartContext)

  return (
    <>
      {cartIsVisible && <Cart />}
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default App;
