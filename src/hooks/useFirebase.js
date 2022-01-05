import initializeAuthentication from '../pages/Login/firebase/firebase.initialize';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, 
    signInWithPopup, updateProfile, signOut } from "firebase/auth";


// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
    // set state for user
    const [user, setUser] = useState({});
    // handle loading state
    const [isLoading, setIsLoading] = useState(true);
    

    // getAuth
    const auth = getAuth();
    // google auth provider
    const googleProvider = new GoogleAuthProvider();

    // new user register function
    const registerUser = (email, password, name, history) => {
        console.log("reg hit: ");
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                // update user name
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    // login user function
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
            })
            .catch((error) => {
            })
            .finally(() => setIsLoading(false));
    }

    // sign in with google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
            }).catch((error) => {
            }).finally(() => setIsLoading(false));
    }

    // user onAuth state change handle
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

                .then((res) => {
                    })
                    
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        }).catch((error) => {
        })
        .finally(() => setIsLoading(false));
    }

    

    
    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;