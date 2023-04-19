import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

function App() {

const [editing,setEditing] = useState(false);
const [users,setUsers] = useState(usersData);

const initialFormState = {id:null,name:'',username:''}
const [currentUser,setCurrentUser] = useState(initialFormState);

  const usersData = [
    {id:1,name:'Murali',username:'krishnan'},
    {id:2,name:'Hope',username:'Tutors'},
    {id:3,name:'Divya',username:'dd'},
];


const a = (user)=>{
  user.id = users.length + 1;
  setUsers([...users,user])
}

const deleteU = (id)=>{
  setUsers(users.filter((user)=>user.id!==id))
  setEditing(false);
}

const updateUser = (id,updatedUser)=>{
  setEditing(false);
  setUsers( 
    users.map(
      (user)=> 
      (
        user.id===id 
        ? updatedUser:
        user
        ) 
  ))
}
const editRow = (user)=>{
  setEditing(true);
  setCurrentUser({id:user.id,name:user.name,username:user.username});
}


  return (
    <div className="container">
  <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
      <div className="flex-large">
      {editing ? 
      (<div>
                <h2>Edit User</h2>
                <EditUserForm 
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                />
            </div>) 
            :
            (<div>
                <h2>Add user</h2>
          <AddUserForm addUser={a} />
          </div>
            ) 
        }

        </div>
      <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteU} editRow={editRow} />
          </div>
      </div>
    </div>
  );
}

export default App;
