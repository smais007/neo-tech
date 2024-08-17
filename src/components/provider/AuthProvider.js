import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import swal from 'sweetalert';
import { app } from '../../firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // github login
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    // google login
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // fb login
    const facebookLogin = () =>{
        setLoading (true)
        return signInWithPopup(auth, facebookProvider)
    }

    // update user profile
    const updateUserProfile = (name, image) =>{
       return updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: image
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error 
           
          });
    }
   

    const logOut = () =>{
        return signOut(auth)
        swal('logout successfully')
    }

    // observer
    useEffect( ()=>{
      const unSubscribe = onAuthStateChanged(auth, createUser =>{
            console.log('user in the auth state', createUser);
            setUser(createUser);
            setLoading(false)
        });
        return() =>{
            unSubscribe();
        }
    })

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        githubLogin,
        googleLogin,
        loading,
        facebookLogin,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
     );
};

export default AuthProvider;