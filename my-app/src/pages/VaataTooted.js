import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function VaataTooted() {

    const [tooted, uuendaTooted] = useState([]);

    //  useEffect(()=>{  Fetch siia ja muu plaust siia  },[]);

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




/*     useEffect(() => {
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
    },[]) */


        //vana andmebaas

/*     function saaTooted(){
        return 
        [{nimetus: "Coca Cola", hind:"1,5", kategooria:"Coca", pilt:"https://www.b2bcentral.co.za/wp-content/uploads/2020/07/returnable1-scaled.jpg"},
        {nimetus: "Fanta", hind:"1,5",kategooria:"Coca", pilt:"https://clipground.com/images/fanta-png-6.png"},
        {nimetus: "Sprite", hind:"1,5",kategooria:"Coca", pilt:"https://pngimg.com/uploads/sprite/sprite_PNG98780.png"},
        {nimetus: "Vitamin Well", hind:"1,5", kategooria:"Vesi", pilt:"https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"}, 
        {nimetus: "Vichy", hind:"1,5",kategooria:"vesi", pilt:"https://s3-eu-west-1.amazonaws.com/balticsimages/images/180x220/00f762143a414de649c52767060c944a.png"}];
    

    } */


    function LisaToode(){
        console.log("töötab nupuvajutus");

    }


    function kustutaToode(kustutamiselToode) {

        let toodeteMassiiv = tooted.slice();
        const index = toodeteMassiiv.indexOf(kustutamiselToode)
        toodeteMassiiv.splice(index,1);
        uuendaTooted(toodeteMassiiv);
        fetch("https://reacti-pood-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
        {
            method: "PUT",
            body: JSON.stringify(toodeteMassiiv)
        })


    }

    function muudaToode(){}

    return (
        <div>
            <Link to="/admin/">
                <button className='menyy-nupp'>tagasi</button>
            </Link>
      

        <div>
            {tooted.map(toode => 
            <div key={toode.nimetus} className="toode">
                <div>{toode.nimetus}</div>
                <div>{toode.hind}</div>
                <div>{toode.kategooria}</div>
                <img src={toode.pilt} alt=""/><br/>
                <button onClick={() => kustutaToode(toode)}>Kustuta toode</button><br/><br/>

                
                <Link to={"/admin/muuda/" + toode.nimetus.toLowerCase().replace(" ", "-")}>
                    <button onClick={muudaToode}>Muuda toode</button><br/><br/>
                </Link>

            </div>)}
        </div>
        </div>
        )

}

export default VaataTooted