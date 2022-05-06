import React, { useState } from "react";
import { auth } from './firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";




const UserAuth = () => {
  

  let [data, setData] = useState({
    email: "",
    password: "",
  });
 
 
  // google Authentication
  let googleAuthentication = (e) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider()
    
    signInWithPopup(auth,provider)
      .then((x) => { return console.log(x) })
      .catch((err) => { console.log(err) });
    console.log(provider);

   
  };
  let { email, password } = data;
  let handleChange = e => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  let SIGNUP = async e => {
    e.preventDefault();
    let ed = await createUserWithEmailAndPassword(auth ,email, password);
    console.log(ed);
  };
  let SIGNIN =  async e => {
    e.preventDefault();
    let ed2 = await signInWithEmailAndPassword(auth, email, password);

   
  };
  return (
    <div>
      <form action="">
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button onClick={SIGNUP}>SIGNUP</button>
        <button onClick={SIGNIN}>SIGNIN</button>
        <button onClick={googleAuthentication}>Google</button>
      </form>
    </div>
  );
};

export default UserAuth;
