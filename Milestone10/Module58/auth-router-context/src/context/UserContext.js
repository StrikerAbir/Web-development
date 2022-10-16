import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext();
const auth= getAuth(app)

const UserContext = ({ children }) => {

    const [user,setUser]=useState({})
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state change', currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = { user,createUser,signIn };

    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default UserContext;