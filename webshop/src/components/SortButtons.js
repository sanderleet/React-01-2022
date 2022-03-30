import React from "react";


function SortButtons(props) {


    function sortAtoZ(){
        props.prods.sort((a, b) => a.name.localeCompare(b.name));
        props.prodsSorted(props.prods.slice());      
    }

    function sortZtoA(){
        props.prods.sort((a, b) => b.name.localeCompare(a.name));
        props.prodsSorted(props.prods.slice());
    }

    function sortPriceAsc(){
        props.prods.sort((a, b) => a.price - b.price);
        props.prodsSorted(props.prods.slice());
    }

    function sortPriceDesc(){
        props.prods.sort((a, b) => b.price - a.price);
        props.prodsSorted(props.prods.slice());
    }

    return (
        <>
        <div style={{'textAlign': 'center'}}>
            <button onClick={sortAtoZ}>Sorteeri A-Z</button>
            <button onClick={sortZtoA}>Sorteeri Z-A</button>   
            <button onClick={sortPriceAsc}>Sorteeri Hinna Järgi Kasvavalt</button>
            <button onClick={sortPriceDesc}>Sorteeri Hinna Järgi Kahanevalt</button>
        </div>
        </>)
}

export default SortButtons;