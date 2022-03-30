import { useRef } from "react";


function SendEmail() {

    const nameRef = useRef();

    function send() {

        window.Email.send({
            Host : "smtp.elasticmail.com",
            Username : "sandervalgo@hotmail.com",
            Password : "7CF62FE37EDA9D8323E25586126D89F1A2783506FF2850BCEB0A2AD7746C090AA998EAD6B78187E548CC4360761029A0",
            To : 'sandervalgo@hotmail.com',
            From : "sandervalgo@hotmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );

    }


    return(<>
    
    <label>Nimi</label> <br/>
    <input ref='nameRef' /> 
    
    
    <button onClick={send()}>Saada eMail </button>)
    
    </>)   
}

export default SendEmail;


// hotmail> 7CF62FE37EDA9D8323E25586126D89F1A2783506FF2850BCEB0A2AD7746C090AA998EAD6B78187E548CC4360761029A0

// E875945257B82DE308AB831AADD8F2B0A6CB1AB60A10990FA5707CE254D79B2817D71DDAE72BCB70ED030FFD5C515DD4

/*
`Email tuli inimeselt: ${nameRef.current.value} . 
              Tema email: ${nameRef.current.value} ja tema sõnum:
              ${messageRef.current.value}
              `
               */