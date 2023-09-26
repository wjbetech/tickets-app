import React from 'react'
import "./page.css"

interface User {
  id: number,
  name: string,
  email: string,
  username: string
}

const UsersPage = async () => {

  // this caching syntax is Next&fetch specific
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" });
  const userData: User[] = await res.json();

  return (
    <div>
      <h1>Users</h1>
      <p>Current Time: {new Date().toLocaleTimeString()}</p>
      <table className="table table-bordered table-sm mt-[50px] w-[90%] m-auto">
        <thead>
          <tr className="text-lg">
            <th>Name: </th>
            <th>Email: </th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => {
            return (
              <tr className="hover" key={user.id}>
                <td className="font-bold">{user.name}</td>
                <td>{user.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage
