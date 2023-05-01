import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = {name : 'refat'};

    const googleSingIn =() =>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubSingIn = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    const authInfo = {
        user,
        googleSingIn,
        githubSingIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;