import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img  src='https://images.pexels.com/photos/13341317/pexels-photo-13341317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=""/>
      <div className="userChatInfo">
        <span>Jonh</span>
      </div>
      </div>

    </div>
  )
}

export default Search