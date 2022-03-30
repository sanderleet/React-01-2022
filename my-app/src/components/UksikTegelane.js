

function UksikTegelane() {

    const tegelaseNimi = window.location.href.split("tegelane/")[1];
    const tegelane = saaTegelased().find(element => element.eesnimi.toLowerCase().replace(" ", "-") === tegelaseNimi)


    function saaTegelased() {

        return [
            {eesnimi:"Mickey", perekonnanimi:"Mouse", asukoht:"Disneyland", vanus:23},
            {eesnimi:"Minnie", perekonnanimi:"Mouse", asukoht:"Disneyland", vanus:22},
            {eesnimi:"Winnie", perekonnanimi:"Pooh", asukoht:"Hundred Acre Wood", vanus:12},
            {eesnimi:"Roo", perekonnanimi:"Kangaroo", asukoht:"Hundred Acre Wood", vanus:7},
            {eesnimi:"Scooby", perekonnanimi:"Doo", asukoht:"Crystal Cove", vanus:6}
        ]
    }

    return(<div>

        <div key= {tegelane.eesnimi}> 
            <p> {tegelane.eesnimi} {tegelane.perekonnanimi}, {tegelane.vanus} aastane, {tegelane.asukoht} </p>

        </div>
    </div>) //returni lõpp

}

export default UksikTegelane;