import { useEffect, useState } from 'react';

function PackageMachines(props) {
    const [packageMachines, setPackageMachines] = useState([]); 
    const [selectedMachine, setSelectedMachine] = useState(
        sessionStorage.getItem("parcelmachine"));


    useEffect(()=>{
        fetch("https://www.omniva.ee/locations.json")
        .then(res => res.json()) //koos headerite ja muu jamaga
        .then(body => setPackageMachines(body)) // Sisu
    },[]);

    function getSelectedMachine(){
        // '{"ZIP": "12123123", "NAME": "asdasdasd", ...}'

        if (sessionStorage.getItem("parcelmachine")) {
            return JSON.parse(sessionStorage.getItem("parcelmachine"));

        } else {}
            return null;
    }
    

    function chooseMachine(event){
        //console.log(selectedMachine);
        const selectedPackageMachine = event.target.value;
        sessionStorage.setItem("parcelmachine", selectedPackageMachine)
        setSelectedMachine(selectedPackageMachine);
        // const packageMachine = packageMachines.find(element => element.name === event.target.value)
        //console.log(event.target.value);
        //console.log(packageMachine);
        const products = props.cartContent;
        const packageMachineInCart = {cartProduct:{id: "11110000",name: "Pakiautomaadi tasu", price: 3.5},quantity:1}
        products.push(packageMachineInCart);
        sessionStorage.setItem("cart",JSON.stringify(products));
        props.sendProducts(products.slice());
        //console.log(products);
    }

    // ["banana", "mango", "apple"] 0, 1, 2 .length === 3    .length-1
    function deleteMachine() {
        sessionStorage.removeItem("parcelmachine");
        setSelectedMachine(null);
        const products = props.cartContent;
        products.splice(products.length-1);
        sessionStorage.setItem("cart",JSON.stringify(products));
        props.sendProducts(products.slice());
      }

    return (
        <div>
        { !selectedMachine && <select onChange={chooseMachine}>{packageMachines
          .filter(element => element.A0_NAME === "EE")
          .map(element => <option>{element.NAME}</option>)}</select>}
      { selectedMachine && <div>{selectedMachine} <button onClick={deleteMachine}>X</button></div> }
      </div>);
}

export default PackageMachines;