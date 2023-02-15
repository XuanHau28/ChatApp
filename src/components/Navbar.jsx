import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat Room</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/13341317/pexels-photo-13341317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User Avatar"/>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar