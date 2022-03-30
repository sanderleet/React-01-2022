import { useState, useEffect } from 'react';
import { useRef } from 'react';
import postitused from './placeholderPosts.json';

function Placeholder() {

    const [esemeteList, uuendaEsemeteList] = useState(saaEsemed(postitused));
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            return response.json();
        }).then(data => 
            {console.log(data.toString() + " data")
                const newArray = [];
                for (const key in data) {
                    newArray.push(data[key]);
                }
                console.log(newArray);
                uuendaEsemeteList(newArray);
            }
            );
    },[])


    function saaEsemed() {

        if (sessionStorage.getItem("esemed")) {
            return JSON.parse(sessionStorage.getItem("esemed")) // init sessionStorage "ostukorv"
        } else {
            return [];
        }
    }
    
/* 
    function lisaEsemed(ese) {
        console.log("Lisan: " + ese);
        console.log(ese);

        const esemed = esemeteList.slice();

        esemed.push(ese);
        sessionStorage.setItem("esemed", JSON.stringify(esemed));
        uuendaEsemeteList(esemed);
        

    } */



    return (<div>ESEMED

        

{/*         <div>
            <button onClick = {lisaEsemed}>Alusta</button>
        </div> */}

        {esemeteList.map(element => 
        <div>
            <div>{element.userId}</div>
            <div>{element.id}</div>
            <div>{element.title}</div>
            <div>{element.body}</div>
        </div>)
        }
        !!




    </div>)

}

export default Placeholder;