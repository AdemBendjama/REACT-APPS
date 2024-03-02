import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';
function App() {

  const [listData, setListData] = useState([])

  const handleUserInput = (userInput) => {
    setListData((prevList) => {
      return [
        ...prevList,
        userInput,
      ]
    })
  }


  return (
    <div>
      <AddUser onSubmit={handleUserInput} />

      <UserList listData={listData} />
    </div>
  );
}

export default App;
