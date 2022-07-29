import { useState, useEffect } from 'react'
import { validateUserResponse } from '../../shared/helpers/validate'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then(async ({ data }) => {
        try {
          const res = await validateUserResponse(data[0])
          if (res) [setUsers(data)]
        } catch (error) {
          throw new Error(error)
        }
      })
  }, [])

  return (
    <div className="App">
      {users?.map((user) => (
        <div key={user.id}>
          <span className="userinfo">{user.name}</span>
          <span className="userinfo">{user.age}</span>
          <span className="userinfo">{user.email}</span>
        </div>
      ))}
    </div>
  )
}

export default App
