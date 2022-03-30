import { useParams, Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

function MuudaToode() {

    const nimetusRef = useRef();
    const hindRef = useRef();
    const aktiivneRef = useRef();
    const piltRef = useRef();

    const [tooted, uuendaTooted] = useState([]);


    //const tooteNimetus2 = window.location.href.split("muuda/"[1]);
    const { tooteNimi }  = useParams();
    
    //console.log(tooteNimetus2);
    //console.log(tooteNimi);

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

    const toode = tooted.find(element => 
        element.nimetus.toLowerCase().replace(" ", "-") === tooteNimi)
    console.log(toode)

    const toodeId = tooted.indexOf(toode)


/*     function saaTooted() {
        return [{nimetus: "Coca Cola", hind: 1, kategooria:"Coca", pilt:"https://www.b2bcentral.co.za/wp-content/uploads/2020/07/returnable1-scaled.jpg"},
        {nimetus: "Fanta", hind: 1.5 ,kategooria:"Coca", pilt:"https://clipground.com/images/fanta-png-6.png"},
        {nimetus: "Sprite", hind: 1.5 ,kategooria:"Coca", pilt:"https://pngimg.com/uploads/sprite/sprite_PNG98780.png"},
        {nimetus: "Vitamin Well", hind: 1.5, kategooria:"Vesi", pilt:"https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"}, 
        {nimetus: "Vichy", hind: 1.5, kategooria:"vesi", pilt:"https://s3-eu-west-1.amazonaws.com/balticsimages/images/180x220/00f762143a414de649c52767060c944a.png"}];
    } */

    function muudaToode(){
/*         console.log("uus toode");
        console.log(nimetusRef.current); */
        console.log(nimetusRef.current.value);
        console.log(hindRef.current.value);
        console.log(aktiivneRef.current.checked);
        console.log(piltRef.current.value);

        const toode = {
            nimetus: nimetusRef.current.value,
            hind: hindRef.current.value,
            aktiivne: aktiivneRef.current.checked,
            pilt: piltRef.current.value
        }
        console.log(toode);
        tooted[toodeId] = toode;
        fetch("https://reacti-pood-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
        {
            method: "PUT",
            body: JSON.stringify(tooted)
        })


    }

    return(<div>

            { toode && 
            <div className="toode">
                <Link to="/admin/tooted">
                    <button className='menyy-nupp'>tagasi</button>
                </Link> <br/>
{/*             <div key={toode.nimetus} className="toode">    */}  

{/*                 <div>Nimetus: {toode.nimetus}</div>
                <div>Hind: {toode.hind}</div>
                <div>Kategooria: {toode.kategooria}</div>
                <div>Pilt: </div><img src={toode.pilt} alt=""/><br/> */}

                
            <label htmlFor="">Toote Nimetus</label> <br/>
            <input  ref={nimetusRef} defaultValue={toode.nimetus} type="text" /><br/>

            <label>Toote hind</label> <br/>
            <input ref={hindRef} defaultValue={toode.hind} type="number" /><br/>

            <label htmlFor="">Pilt</label> <br/>
            <input  ref={piltRef} defaultValue={toode.pilt} type="text" /><br/>
            <img src={toode.pilt} alt=""/><br/>

            <label htmlFor="">Toode aktiivne</label> <br/>
            <input ref={aktiivneRef} id='aktiivne' type='checkbox'/><br/>



            <button onClick={muudaToode}>Sisesta</button><br/>


            </div>}

            { !toode && <div> Sellist toodet ei eksisteeri! </div>}
        
        
        </div>)




/*     return (<div>
        Muuda Toode
        </div>) */

} 

export default MuudaToode;