import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";



const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
  }, []);

  const getUsers = () => {
    axios.get('http://localhost:3300/user')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  } ;

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3300/user/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="columns mt-5 is-centered">
      <div className="comun is-half">
        <Link to={"/add"}>
          <button className="button is-success is-small">Add User</button>
        </Link>
        <tabel className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link to={`edit/${user.id}`} className='button is-info is-small'>Edit</Link>
                  <button 
                    onClick={() => deleteUser(user.id)}
                  className="button is-danger is-small">
                    Delete
                  </button>
                </td>
              </tr>
            ))} 
        </tbody>
        </tabel>
       
        
        </div>
    </div>
  )
}

export default UserList