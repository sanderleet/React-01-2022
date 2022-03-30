import automaadiAndmed from './locations.json';
import  { useState } from 'react';  // state hook




function Pakiautomaadid () {
    const [pakiautomaadiRiik,  uuendaRiiki] = useState("EE");

return (
   <div>
        <button onClick={() => uuendaRiiki("EE")}>Eesti</button>
        <button onClick={() => uuendaRiiki("LT")}>Läti</button>
        <button onClick={() => uuendaRiiki("LV")}>Leedu</button>
        <br/>
        <select>{
        automaadiAndmed.map(element => 
            {
                if(element.A0_NAME === pakiautomaadiRiik) {
                return <option key={element.ZIP}>{ element.NAME }</option>
                    
                } else {
                     return null;} 

            }            
        )}
        </select>
    </div>)
}


export default Pakiautomaadid;