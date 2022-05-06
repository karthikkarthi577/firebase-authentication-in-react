import React, { Fragment, useEffect, useState } from "react";
import UserAuth from "./UserAuth";
import Home from "./Home";
import { auth } from "./firebase";

const App = () => {
  let [present, setPresent] = useState({});
  console.log(present);
  useEffect(() => {
    // onAuthStatechanged it is used to check whether it is authenticated or not .if authenticated  it is used to get the details of the authendicated user
    // it is used to get the detils of the logined user details
    auth.onAuthStateChanged(user => {
      if (user) {
        setPresent({
          uid: user?.uid,
          email: user?.email,
        });
      } else {
        setPresent(null);
      }
    });
  }, []);

  return <div>{present ? <Home data={present} /> : <UserAuth />}</div>;
};

export default App;
