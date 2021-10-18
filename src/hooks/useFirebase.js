import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = (email, password, name) => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    console.log(name, email, password);
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => unSubscribe;
    }, [auth])

    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message);
        })
            .finally(() => setIsLoading(false));
    }

    return {
        signInGoogle,
        logout,
        user,
        isLoading
    }
}
export default useFirebase;