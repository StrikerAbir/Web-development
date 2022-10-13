import logo from "./logo.svg";
import "./App.css";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase/firebase.init";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        // console.log(user.photoURL);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <div className="App">
      {user.email ? (<>
        <button onClick={handleGoogleSignOut}>Google sign out</button>
        <button onClick={handleGithubSignOut}>Google sign out</button>
      </>
      ) : (<>
        <button onClick={handleGoogleSignIn}>Google sign in</button>
        <button onClick={handleGithubSignIn}>Google sign in</button>
      </>
      )}
      {/* conditional rendering */}
      {user.email && (
        <div>
          <h3>User Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
