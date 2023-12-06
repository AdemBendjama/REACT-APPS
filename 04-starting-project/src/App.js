import React, { useState } from 'react';
import UserList from './components/UserList/UserList';
import UserInput from './components/UserInput/UserInput';


function App() {

  const [userList, setUserList] = useState([])

  const addHandler = (userInput) => {
    setUserList(prevState => {
      return [...prevState, userInput]
    })
  }

  return (
    <div>
      <UserInput onAdd={addHandler}></UserInput>
      <UserList userList={userList} ></UserList>
    </div>
  );
}

export default App;
