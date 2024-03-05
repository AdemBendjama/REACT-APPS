import React, { useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";


function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false)
  const [itemQuantity, setItemQuantity] = useState(0)

  const handleAddToCart = (amount) => {
    setItemQuantity((prevState) => {
      return (prevState + amount)
    })
    handleBump()
  }

  const handleCartVisibility = () => {
    setCartIsVisible(!cartIsVisible)
  }

  const [isBumped, setIsBumped] = useState(null)

  const handleBump = () => {
    setIsBumped(true)
    setTimeout(() => {
      setIsBumped(false)
    }, 300);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCartVisibility} />}
      <Header itemQuantity={itemQuantity}
        isBumped={isBumped}
        onShow={handleCartVisibility}
      />
      <MealsSummary />
      <AvailableMeals onBump={handleBump} onAdd={handleAddToCart} />
    </>
  );
}

export default App;
