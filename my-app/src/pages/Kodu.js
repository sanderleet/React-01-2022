
function Kodu() {

    function saaTooted(){
        return [{nimetus: "Coca Cola", hind:"1,5", kategooria:"Coca", pilt:"https://ecoop.ee/assets/img/data/1/products/22323091-cocacola-15l-1642554169700.jpg"},
        {nimetus: "Fanta", hind:"1,5",kategooria:"Coca", pilt:"https://ecoop.ee/assets/img/data/1/products/12866129-fanta-2l-apelsinimaitseline-1642554181431.jpg"},
        {nimetus: "Sprite", hind:"1,5",kategooria:"Coca", pilt:"https://ecoop.ee/assets/img/data/1/products/22323318-sprite-15l-sidrunilaimimaitseline-1642554175394.jpg"},
        {nimetus: "Vitamin Well", hind:"1,5", kategooria:"Vesi", pilt:"https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"}, 
        {nimetus: "Vichy", hind:"1,5",kategooria:"vesi", pilt:"https://s3-eu-west-1.amazonaws.com/balticsimages/images/180x220/00f762143a414de649c52767060c944a.png"}];
    }

    function LisaOstukorvi(){
        console.log("töötab nupuvajutus");
    }

    return (
        <div>
            {saaTooted().map(toode => 
            <div key={toode.nimetus} className="toode">
                <div>{toode.nimetus}</div>
                <div>{toode.hind}</div>
                <div>{toode.kategooria}</div>
                <img src={toode.pilt} alt=""/><br/>
                <button onClick={LisaOstukorvi}>Lisa Ostukorvi</button><br/><br/>
                
            </div>)}
        </div>
    )
}

        // default tähendab, et imporditakse alati terve component
        // import { Link } from 'react-router-dom'
        // see tähendab, et link juures ei olnud default

export default Kodu;