import { useState } from 'react';




function Ostukorv() {

    const [ostukorviEsemed, uuendaOstukorvi] = useState(saaOstukorv());


    function saaOstukorv(){

        // return [
        //     {nimi:"Rolex", maksumus: 5999, aktiivne: true}, 
        //     {nimi:"Tag Heuer",maksumus: 666, aktiivne: false}, 
        //     {nimi:"Huge Boss",maksumus: 9001, aktiivne: true}];

        if (sessionStorage.getItem("ostukorv")) {
            return JSON.parse(sessionStorage.getItem("ostukorv")) // init sessionStorage "ostukorv"
        } else {
            return [];
        }

    }



    function lisaOstukorvi(toode) {
        console.log("Ostukorvi lisatud!")
        console.log(toode)
        // push

/*         const string = "sonaline muutuja";
        let number = 12312;
        const kahendvaartus = true;
        let jsonObjekt = {};
        const massiiv = [321,121,1212,22];
 */
        const tooted = ostukorviEsemed.slice();

        console.log(tooted);
        tooted.push(toode);
        console.log(tooted);
        sessionStorage.setItem("ostukorv", JSON.stringify(tooted));
        uuendaOstukorvi(tooted);
    }




    function kustutaOstukorvist(toode) {
        console.log("Ostukorvist Kustutamine!")
        console.log(toode)

        // indexof
        // splice
        console.log(ostukorviEsemed)

        let tooted = ostukorviEsemed.slice();
        console.log("Teeme tooted:");
        console.log(tooted);
        let indeks = tooted.indexOf(toode);

        if (indeks !== -1) {
            //console.log("Leian indeksi:")
            //console.log(indeks);
    
            tooted.splice(indeks, 1);
            sessionStorage.setItem("ostukorv", JSON.stringify(tooted));
            //console.log("Peale Splice'i jäi alles:")
            //console.log(tooted);
    
            uuendaOstukorvi(tooted.slice());
            //console.log("Peale uuendust on meil:")
            //console.log(ostukorviEsemed);
        }
    }


    function tyhjendaOstukorv() {
        const tooted = [];
        sessionStorage.setItem("ostukorv", JSON.stringify(tooted));
        uuendaOstukorvi(tooted);
        console.log("tyhi");
    }

    function ostukorviSumma() {
        let summa =  0;

        ostukorviEsemed.forEach(element => summa += Number(element.hind));

        return summa;
    }

    function maksa(){

        const andmed = {
            api_username: "92ddcfab96e34a5f",
            account_name: "EUR3D1",
            amount: ostukorviSumma(),
            order_reference: "694320",
            nonce: "a9b7f7e794367c2c3354154a01b9902" + new Date(),
            timestamp: new Date(),
            customer_url: "https://www.delfi.ee"
            }; 

        fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",
            {
                method: "POST",
                body: JSON.stringify(andmed),
                headers: { 
                    "Content-Type" :"application/json",
                    "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
                }
            }        
        
        ).then (res => res.json())
            .then(data => window.location.href = data.payment_link);
    }


    return (
    <div>
        { ostukorviEsemed.length !== 0 &&  <button onClick={tyhjendaOstukorv}>Tühjenda Ostukorv</button> }

        {ostukorviEsemed.map(element =>
        <div>
            <div>{element.nimetus}</div>
            <div>{element.hind}</div>
            <div>{element.aktiivne}</div>
            <button onClick={() => lisaOstukorvi(element) }>+</button>
            <button onClick={() => kustutaOstukorvist(element) }>x</button> 
        </div>)
        }
        { ostukorviEsemed.length !== 0 && <div>Kokku: {ostukorviSumma()}$</div>}
        { ostukorviEsemed.length !== 0 && <button onClick={maksa}>Maksma</button>}
        { ostukorviEsemed.length === 0 && <div>Ostukorv tühi!</div>}

        
    </div>)
} 

export default Ostukorv;