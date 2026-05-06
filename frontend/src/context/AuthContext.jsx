import {
    createContext,
    useEffect,
    useState
} from "react";

import {
    getCurrentUser
} from "../api/userApi";

export const AuthContext =
    createContext();

function AuthProvider({ children }) {

    const [token, setToken] =
        useState(
            localStorage.getItem("token")
        );

    const [user, setUser] =
        useState(null);

    const login = async (jwtToken) => {

        localStorage.setItem(
            "token",
            jwtToken
        );

        setToken(jwtToken);

        const currentUser =
            await getCurrentUser();

        setUser(currentUser);
    };

    const logout = () => {

        localStorage.removeItem("token");

        setToken(null);

        setUser(null);
    };

    const fetchUser =
        async () => {

            if (!token) return;

            try {

                const currentUser =
                    await getCurrentUser();

                setUser(currentUser);

            } catch (err) {

                console.log(err);
            }
        };

    useEffect(() => {

        fetchUser();

    }, [token]);

    return (

        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
                user
            }}
        >

            {children}

        </AuthContext.Provider>
    );
}

export default AuthProvider;