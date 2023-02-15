import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
     <div className="messageInfo">
      <img  src='https://images.pexels.com/photos/13341317/pexels-photo-13341317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=""/>
      <span>Just now</span>
     </div>
     <div className="messageContent">
      <img  src='https://images.pexels.com/photos/13341317/pexels-photo-13341317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=""/>
      <p>Hello</p>
     </div>
    </div>
  )
}

export default Message