import React from 'react'
import { auth } from "./firebase";

const Home = ({ data }) => {
  console.log(data);
  return (
    <div>
      <p>{data.email}</p>

      {/* /auth.signOut remove the signin data of the user so it will return to the default page */}
      <button onClick={() => auth.signOut()}>LOGout</button>
    </div>
  );
}

export default Home