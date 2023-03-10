import React, { useState } from "react";
import addAvatar from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";




const Register = () => {

  const [error, setError] = useState(false)
  const navigate = useNavigate();

  //handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create User
      const res = await createUserWithEmailAndPassword (auth, email, password)

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file)

      //Register three observer
      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateProfile(res.user, {
               displayName,
               photoURL: downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "userChats", res.user.uid), {
              
            })
            navigate("/");
          })
        }
      );

      
    }
    catch (error) {
      setError(true)
    }
    
  } 

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Chat Room</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='display Name' />
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display: 'none'}} type='file' id='file' />
                <label htmlFor='file'>  
                    <img src={addAvatar} alt="Add avatar"/>
                    <span>Add a avatar</span>
                </label>
                <button>Sign Up</button>
                {error && <span>Some Thing Went Wrong</span>}
            </form>
            <p>Do you have account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register