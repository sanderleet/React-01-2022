import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
//import { loggedInService } from '../../services/loggedInService';
import AuthContext from '../../store/authContext';

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState();
    const ctx = useContext(AuthContext);
    

    function onLogin(event) {
        event.preventDefault()

        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPKDelVJ2nVQbbRsEh2B0L-f6bf_ZGQDM'
        const data = { 
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true
        }
        fetch(url,{
            method: "POST",
            body: JSON.stringify(data)           
        }).then(res =>  {
            if (res.ok) {
            console.log("edukas")
            navigate("/admin/");
            ctx.onLogin();
            /* sessionStorage.setItem("isLoggedIn", true);
            loggedInService.sendIsLoggedIn(true); */
        } else {
            console.log("Mitte edukas");
            return res.json();
        }
    }).then(data => {
        if (data) {
        setErrorMessage(data.error.message)
            /* sessionStorage.setItem("isLoggedIn", true); */  
        }
    });

    }


    return (
        <div>
            <div>{errorMessage}</div>
            <form onSubmit={onLogin} >
                <label>E-mail </label> 
                <input type="text" ref={emailRef}/> <br/>
                <label>Parool </label>
                <input type="password" ref={passwordRef}/> <br/>
                <button>Logi sisse</button>
            </form>
        </div>)
}

export default Login;