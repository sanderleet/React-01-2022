import React, {useState, useEffect } from 'react'

const AuthContext = React.createContext({
    loggedIn: false,
    onLogin: () => {}

});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(getLoggedInFromSS);


    //const [loggedIn, setLoggedIn] = useState(loggedInFromSS())
    //loggedInService.getIsLoggedIn().subscribe(isLoggedInFromObs => setLoggedIn(isLoggedInFromObs))

    function getLoggedInFromSS() {
      return (sessionStorage.getItem("isLoggedIn"))
    }


    function loginHandler() {
        sessionStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
    } 

    function logoutHandler() {
        sessionStorage.setItem("isLoggedIn", false);
        setIsLoggedIn(false);
    } 


    return (
        <AuthContext.Provider value={{
            loggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;