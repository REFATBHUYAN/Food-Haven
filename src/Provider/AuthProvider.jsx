import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dataLoading, setDataLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://assignment-10-batch7-server.vercel.app/chef')
        .then(res => res.json())
        .then(data =>{
            setData(data) 
            setDataLoading(false)})
    },[])
    // console.log(data);

    const googleSingIn =() =>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubSingIn = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUser = (name, photo) =>{
        setLoading(true);
        // console.log(auth.currentUser);
        return updateProfile(auth.currentUser,{
            displayName: name, 
            photoURL: photo
          })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            // console.log('user from useffect', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        googleSingIn,
        githubSingIn,
        createUser,
        updateUser,
        loginUser,
        logOut,
        loading,
        data,
        dataLoading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;