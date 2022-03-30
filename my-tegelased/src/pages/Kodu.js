import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Kodu() {

    //andmebaasi alustame state'i abil, kuna see võtab aega ja jõuame ülejäänud lehe renderdada.

    const [tooted, uuendaTooted] = useState([]);

    useEffect(() => {
        fetch("https://reacti-pood-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
        .then(response => {
            return response.json();
        }).then(data => 
            {console.log(data.toString() + " data")
                const newArray = [];
                for (const key in data) {
                    newArray.push(data[key]);
                }
                console.log(newArray);
                uuendaTooted(newArray);
            }
            );
    },[])
    

     //vana andmebaas/hardcoded
    function saaTooted(){
        return [{nimetus: "Coca Cola", hind: 1.5, kategooria:"Coca", pilt:"https://www.b2bcentral.co.za/wp-content/uploads/2020/07/returnable1-scaled.jpg"},
        {nimetus: "Fanta", hind: 1.5,kategooria:"Coca", pilt:"https://clipground.com/images/fanta-png-6.png"},
        {nimetus: "Sprite", hind: 1.5,kategooria:"Coca", pilt:"https://pngimg.com/uploads/sprite/sprite_PNG98780.png"},
        {nimetus: "Vitamin Well", hind: 1.5, kategooria:"Vesi", pilt:"https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"}, 
        {nimetus: "Vichy", hind: 1.5,kategooria:"vesi", pilt:"https://s3-eu-west-1.amazonaws.com/balticsimages/images/180x220/00f762143a414de649c52767060c944a.png"}];
    } 

    function LisaOstukorvi(lisatavToode){
        console.log("töötab nupuvajutus");

        //setItem(key:"stringina", value:"stringina")
        //const mutuja = sessionStorage.setItem("ostukorv", JSON.stringify(saaTooted()));

        if (sessionStorage.getItem("ostukorv")) {
            

            const SessiooniOstukorv = JSON.parse(sessionStorage.getItem("ostukorv"));
            SessiooniOstukorv.push(lisatavToode);
            //console.log(mutuja);
            sessionStorage.setItem("ostukorv", JSON.stringify(SessiooniOstukorv));
            //console.log(SessiooniOstukorv);

        }else{
            console.log("ei ole tooteid")
                sessionStorage.setItem("ostukorv", JSON.stringify([lisatavToode]));

        }


    }


    return (
        <div>
            {tooted.map(toode => 
            <div key={toode.nimetus} className="toode">

                <Link to={"/toode/" + toode.nimetus.toLowerCase().replace(" ", "-")}>            
                    <div>{toode.nimetus}</div>
                    <div>{toode.hind}</div>
                    <div>{toode.kategooria}</div>
                    <img src={toode.pilt} alt=""/><br/>
                </Link>
                {/* () => on selleks, et saaksin kasutada funktsiooni järel sulgusid ja ei läheks käima 
                renderdamisel vaid nuppu vajutusel */}
                <button onClick={() => LisaOstukorvi(toode)}>Lisa Ostukorvi</button><br/><br/>
                
            </div>)}
        </div>
    )
}

        // default tähendab, et imporditakse alati terve component
        // import { Link } from 'react-router-dom'
        // see tähendab, et link juures ei olnud default

export default Kodu;