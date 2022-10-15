import logo from "./logo.svg";
import "./App.css";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase/firebase.init";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider();

  // google sign in and out
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
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

  // github sign in and out
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
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

  const handleGithubSignOut = () => {
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
      {user.uid ? (<>
        <button onClick={handleGoogleSignOut}>Google sign out</button>
        <button onClick={handleGithubSignOut}>GitHub sign out</button>
      </>
      ) : (<>
        <button onClick={handleGoogleSignIn}>Google sign in</button>
        <button onClick={handleGithubSignIn}>GitHub sign in</button>
      </>
      )}
      {/* conditional rendering */}
      {user.uid && (
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
