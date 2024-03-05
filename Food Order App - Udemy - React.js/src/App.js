import React, { useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";


function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false)
  const [itemQuantity, setItemQuantity] = useState(0)
  const [cartItems, setCartItems] = useState([])

  const handleCartItemAdd = (id, name, price, amount) => {
    setItemQuantity((prevState) => {
      return (prevState + amount)
    })
    handleBump()

    setCartItems((prevState) => {

      const itemIndex = prevState.findIndex((item) => item.id === id)

      if (itemIndex !== -1) {
        const itemList = [...prevState]
        itemList[itemIndex].amount += amount
        return itemList
      }

      return (
        [...prevState,
        {
          id: id,
          name: name,
          price: price,
          amount: amount,
        },
        ]
      )
    })
  }

  // const handleAddToCart = (amount) => {
  //   setItemQuantity((prevState) => {
  //     return (prevState + amount)
  //   })
  //   handleBump()
  // }

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
      {cartIsVisible && <Cart onClose={handleCartVisibility} cartItems={cartItems} />}
      <Header itemQuantity={itemQuantity}
        isBumped={isBumped}
        onShow={handleCartVisibility}
      />
      <MealsSummary />
      <AvailableMeals onBump={handleBump} onAdd={handleCartItemAdd} />
    </>
  );
}

export default App;
