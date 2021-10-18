import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message);
            })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });

        return () => unSubscribe;
    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message);
        });
    }
    return {
        signInGoogle,
        logout,
        user
    }

}
export default useFirebase;