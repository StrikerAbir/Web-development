import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext();
const auth= getAuth(app)

const UserContext = ({ children }) => {

    const [user,setUser]=useState({})
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signingOut = () => {
        return signOut(auth);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    
    const authInfo = { user, createUser, signIn, signingOut, signInWithGoogle };
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state change', currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[])


    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default UserContext;