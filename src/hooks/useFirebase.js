import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const registerNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const processLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then((result) => {
                setUser(result);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(user);
            }
            setIsLoading(false);
        });

        return () => unSubscribe;
    }, [auth, user])


    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        })
            .finally(() => setIsLoading(false));
    }

    return {
        signInGoogle,
        logout,
        user,
        isLoading,
        registerNewUser,
        setUserName,
        processLogIn,
        error
    }
}
export default useFirebase;