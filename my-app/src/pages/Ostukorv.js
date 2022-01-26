import { useState } from 'react';




function Ostukorv() {

    const [ostukorviEsemed, uuendaOstukorvi] = useState(saaOstukorv());


    function saaOstukorv(){
        return [
            {nimi:"Rolex", maksumus: 5999, aktiivne: true}, 
            {nimi:"Tag Heuer",maksumus: 666, aktiivne: false}, 
            {nimi:"Huge Boss",maksumus: 9001, aktiivne: true}]
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
            //console.log("Peale Splice'i jäi alles:")
            //console.log(tooted);
    
            uuendaOstukorvi(tooted.slice());
            //console.log("Peale uuendust on meil:")
            //console.log(ostukorviEsemed);
        }
    }


    function tyhjendaOstukorv() {
        const tooted = [];
        uuendaOstukorvi(tooted);
        console.log("tyhi");
    }

    function OstukorviSumma() {
        let summa =  0;

        ostukorviEsemed.forEach(element => summa += element.maksumus   )


        return summa;

    }

    return (
    <div>
        { ostukorviEsemed.length !== 0 &&  <button onClick={tyhjendaOstukorv}>Tühjenda Ostukorv</button> }

        {ostukorviEsemed.map(element =>
        <div>
            <div>{element.nimi}</div>
            <div>{element.maksumus}</div>
            <div>{element.aktiivne}</div>
            <button onClick={() => lisaOstukorvi(element) }>+</button>
            <button onClick={() => kustutaOstukorvist(element) }>x</button> 
        </div>)
        }
        { ostukorviEsemed.length !== 0 && <div>Kokku: {OstukorviSumma()}$</div>}
        { ostukorviEsemed.length === 0 && <div>Ostukorv tühi!</div>}

        
    </div>)
} 

export default Ostukorv;