import React from 'react';
import addAvatar from '../assets/addAvatar.png';

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Chat Room</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='display Name' />
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display: 'none'}} type='file' id='file' />
                <label htmlFor='file'>  
                    <img src={addAvatar} alt="Add avatar"/>
                    <span>Add a avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Do you have account? Login</p>
        </div>
    </div>
  )
}

export default Register