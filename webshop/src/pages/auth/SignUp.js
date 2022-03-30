
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState();

    

    function onSignup(event) {
        event.preventDefault()

        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPKDelVJ2nVQbbRsEh2B0L-f6bf_ZGQDM'
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
        } else {
            console.log("Mitte edukas");
            return res.json();
        }
    }).then(data => setErrorMessage(data.error.message)
            /* sessionStorage.setItem("isLoggedIn", true); */  
        );
        
    }


    return (
        <div>
            <div>{errorMessage}</div>
            <form onSubmit={onSignup} >
                <label>E-mail </label>
                <input type="text" ref={emailRef}/> <br/>
                <label>Parool </label>
                <input type="password" ref={passwordRef}/> <br/>
                <button>Registreeri</button>

            </form>
        </div>)
}

export default SignUp;