import { Link } from 'react-router-dom';
import { useRef } from 'react';

function LisaTegelane() {

    const eesnimiRef = useRef();
    const perekonnanimiRef = useRef();
    const asukohtRef = useRef();
    const vanusRef = useRef();

    function lisaUusTegelane(){
        console.log("uus toode");
/*         console.log(eesnimiRef.current.value);
        console.log(perekonnanimiRef.current.value);
        console.log(asukohtRef.current.value);
        console.log(vanusRef.current.value); */
        const tegelane = {
            eesnimi: eesnimiRef.current.value,
            perekonnanimi: perekonnanimiRef.current.value,
            asukoht: asukohtRef.current.value,
            vanus: vanusRef.current.value
        }
        console.log(tegelane)

    }


    return(<div>
            <Link to="/tegelased/">
                <button className='menyy-nupp'>tagasi</button>
            </Link> <br/>

            <label htmlFor="">Tegelase nimi:</label> <br/>
            <input  ref={eesnimiRef} type="text" /><br/>

            <label htmlFor="">Tegelase perekonnanimi:</label> <br/>
            <input  ref={perekonnanimiRef} type="text" /><br/>

            <label htmlFor="">Tegelase asukoht:</label> <br/>
            <input  ref={asukohtRef} type="text" /><br/>
            
            <label htmlFor="">Tegelase vanus:</label> <br/>
            <input  ref={vanusRef} type="number" /><br/>

            <button onClick={lisaUusTegelane}>Sisesta</button><br/>

    </div>)

}
export default LisaTegelane;