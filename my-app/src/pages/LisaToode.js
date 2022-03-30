import { Link } from 'react-router-dom';
import { useRef } from 'react';


function LisaToode() {

    const nimetusRef = useRef();
    const hindRef = useRef();
    const aktiivneRef = useRef();



    function sisestaUusToode(){
        console.log("uus toode 123");
        console.log(nimetusRef.current);
        console.log(nimetusRef.current.value);
        console.log(hindRef.current.value);
        console.log(aktiivneRef.current.checked);
        const toode = {
            nimetus: nimetusRef.current.value,
            hind: hindRef.current.value,
            aktiivne: aktiivneRef.current.checked
        }
        console.log(toode);
        fetch("https://reacti-pood-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
            {
                method: "POST",
                body: JSON.stringify(toode)
            }        
        
        );
        console.log("asd");

    }

    return(
        <div>
            <Link to="/admin/">
                <button className='menyy-nupp'>tagasi</button>
            </Link> <br/>

            <label htmlFor="">Toote Nimetus</label> <br/>
            <input  ref={nimetusRef} type="text" /><br/>

            <label>Toote hind</label> <br/>
            <input ref={hindRef} type="number" /><br/>

            <label htmlFor="">Toode aktiivne</label> <br/>
            <input ref={aktiivneRef} id='aktiivne' type='checkbox'/><br/>

            <button onClick={sisestaUusToode}>Sisesta</button><br/>

        

        </div>
    )


}
export default LisaToode