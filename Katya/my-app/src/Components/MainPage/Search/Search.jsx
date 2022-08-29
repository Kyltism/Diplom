// import './Search.css'

// const Search = () => {
//     return (
//         <form className="SearchFunction">
//             <input className='search' type="search" placeholder='Search...' />
//         </form>
//     )
// }

import React, { useState } from "react"

const SearchUser = () => {
  const [users, setUsers] = useState([])

  const fetchData = e => {
    const query = e.target.value
    fetch(`https://api.itbook.store/1.0/search/{query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (
    <div>
      <input onChange={fetchData} label="Search User" />
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchUser