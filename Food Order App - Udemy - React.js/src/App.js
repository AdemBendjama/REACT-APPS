import React, { useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";


function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false)

  const handleCartVisibility = () => {
    setCartIsVisible(!cartIsVisible)
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCartVisibility} />}
      <Header onShow={handleCartVisibility} />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default App;
