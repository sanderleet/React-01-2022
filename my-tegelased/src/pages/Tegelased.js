import { useState } from 'react';
import { Link } from 'react-router-dom';


function Tegelased() {

    const [tegelasteList, uuendaTegelasteListi] = useState(saaTegelased());


    function saaTegelased() {

        return [
            {eesnimi:"Mickey", perekonnanimi:"Mouse", asukoht:"Disneyland", vanus:23},
            {eesnimi:"Minnie", perekonnanimi:"Mouse", asukoht:"Disneyland", vanus:22},
            {eesnimi:"Winnie", perekonnanimi:"Pooh", asukoht:"Hundred Acre Wood", vanus:12},
            {eesnimi:"Roo", perekonnanimi:"Kangaroo", asukoht:"Hundred Acre Wood", vanus:7},
            {eesnimi:"Scooby", perekonnanimi:"Doo", asukoht:"Crystal Cove", vanus:6}
        ]
    }


    function misNimi(tegelane) {
        console.log(tegelane.eesnimi)

    }

    function tegelasteVanused(){

        let summa = 0;
        tegelasteList.forEach(element => summa += element.vanus);
        return summa;

    }
/* 
    function tegelasteKeskmineVanus(){

        let summa = 0;
        tegelasteList.forEach(element => summa += element.vanus);
        summa = (summa / tegelasteList.length)
        return summa;
    }
 */

    function lisaTegelasteListi(tegelane){

        const tegelasedKoos = tegelasteList.slice();
        tegelasedKoos.push(tegelane);
        uuendaTegelasteListi(tegelasedKoos);
    }

    function eemaldaTegelasteListist(tegelane){

        console.log(tegelane)

        let tegelasedKoos = tegelasteList
        console.log(tegelasedKoos)

        let indeks = tegelasedKoos.indexOf(tegelane);
        console.log(indeks)

        if (indeks !== -1) {
            tegelasedKoos.splice(indeks, 1);

            uuendaTegelasteListi(tegelasedKoos.slice());
            console.log("Peale uuendust on meil:");
            console.log(tegelasteList);
        }
    }


    // Kusuta K]ik nimekirjast
    function kustutaValitud() {

        const tegelased = [];
        
        uuendaTegelasteListi(tegelased);
       
    }

    return ( 
        <div>
            <button onClick={() => kustutaValitud() }>Kustuta kõik valitud</button>
            <Link to="/tegelased/lisa">
                <button className='menyy-nupp'>Lisa uus Tegelane</button>
            </Link>
            { tegelasteList.length !== 0 && <div>Hetkel valitud {tegelasteList.length} tegelast</div>}
            { tegelasteList.length !== 0 && <div>Kokku: {tegelasteVanused()} aastat</div>}
            { tegelasteList.length !== 0 && <div>Keskmine: {tegelasteVanused()/tegelasteList.length} aastat</div>}
            { tegelasteList.length === 0 && <div>Nimekiri tühi</div>}
        { tegelasteList.map( element => 
            <div>
                <Link to={"/tegelane/" + element.eesnimi.toLowerCase().replace(" ", "-")}>
                
                <p> {element.eesnimi} {element.perekonnanimi}, {element.vanus} aastane, {element.asukoht} </p>
                </Link>
                <button onClick={() => misNimi(element) }>Nimi</button>
                <button onClick={() => lisaTegelasteListi(element) }>Lisa</button>
                <button onClick={() => eemaldaTegelasteListist(element) }>Eemalda</button>
            </div>)
        } 
    </div>)

} 

export default Tegelased;