import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [users, setUsers] = useState([]);
  const AddUserHandler = (newUser) => {
    setUsers(preState => {
      return[...preState,newUser]
    })
  } 
  console.log(users);
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={users} />
    </div>
    
  );
}

export default App;
