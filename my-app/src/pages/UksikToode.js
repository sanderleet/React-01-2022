import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



function UksikToode() {

    // .splice() - MASSIIV/LIST/ARRAY kustutamiseks = lisamiseks mingile kindlale indeksile
    // .slice() - MASSIIV/LIST/ARRAY massiivi koopia tegemiseks (mälukohtade kaotamiseks)
    // .split() - STRING/SÕNA sõnalise muutuja tükeldamiseks, mis teeb sellest massiivi

    // "Elas metsas mutionu, keset kuuski".split(" ") -----
    // ["Elas", "metsas" "mutionu," "keset" "kuuski"]

    // "Elas metsas mutionu, keset kuuski".split("a") -----
    // ["El", "s mets", "s mutionu, keset kuuski" ]

    const [tooted, uuendaTooted] = useState([]);

    console.log(window.location.href.split("toode/"));
    console.log(window.location.href.split("toode/")[1]);

    const tooteNimetus = window.location.href.split("toode/")[1];

    // find()
    const toode = tooted.find(element => 
        element.nimetus.toLowerCase().replace(" ", "-") === tooteNimetus)
    console.log(toode)

    useEffect(()=>{
        fetch("https://reacti-pood-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
        .then(tagastus => tagastus.json())
        .then(andmed => {
            //firebase annab json andmed tagasi teisel kujul
            // {võti: {toode}, võti: {toode}}
            //forin
            // [] --> [{toode1}] --> [{toode1}, {todoe2}]

            const uusMassiiv = [];
            for (const voti in andmed) {
                uusMassiiv.push(andmed[voti]);
            }
            uuendaTooted(uusMassiiv);
            console.log("uuendan")
        
        });
    },[]);



/*     function saaTooted(){
        return [{nimetus: "Coca Cola", hind:"1,5", kategooria:"Coca", pilt:"https://www.b2bcentral.co.za/wp-content/uploads/2020/07/returnable1-scaled.jpg"},
        {nimetus: "Fanta", hind:"1,5",kategooria:"Coca", pilt:"https://clipground.com/images/fanta-png-6.png"},
        {nimetus: "Sprite", hind:"1,5",kategooria:"Coca", pilt:"https://pngimg.com/uploads/sprite/sprite_PNG98780.png"},
        {nimetus: "Vitamin Well", hind:"1,5", kategooria:"Vesi", pilt:"https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"}, 
        {nimetus: "Vichy", hind:"1,5",kategooria:"vesi", pilt:"https://s3-eu-west-1.amazonaws.com/balticsimages/images/180x220/00f762143a414de649c52767060c944a.png"}];
    } */

    return(<div>

        {toode &&
        
            <div key={toode.nimetus} className="toode">     
                    <div>Nimetus: {toode.nimetus}</div>
                    <div>Hind: {toode.hind}</div>
                    <div>Kategooria: {toode.kategooria}</div>
                    <img src={toode.pilt} alt=""/><br/>
                    {/* <Link to={"/admin/muuda/" + toode.nimetus.toLowerCase().replace(" ", "-")}>            
                        <button>Muuda</button>
                    </Link> */}
            </div>}
            {!toode && <div> ei ole toodet  </div>}
        </div>)
}
export default UksikToode;