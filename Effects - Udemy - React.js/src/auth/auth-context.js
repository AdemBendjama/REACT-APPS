import React, { useEffect, useState } from "react";

const AuthContext = React.createContext(
    {
        isLoggedIn: false,
        onLogout: () => { },
        onLogin: () => { }
    }
)

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInInfo = localStorage.getItem('isLoggedIn')
        if (loggedInInfo === '1') {
            setIsLoggedIn(true);
        }
    }, [])

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways

        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', '0')
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;