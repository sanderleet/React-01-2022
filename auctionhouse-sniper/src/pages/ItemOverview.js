
import React from 'react'
import { useEffect, useState } from "react";
import * as AiIcons from 'react-icons/ai';
import './ItemView.css'
import ItemData from '../components/ItemData';
import ItemCard from '../components/ItemCard';

//rfec

import Modal from 'react-modal';
import EditItem from './EditItem';


//Crafting valemite koondvaade 
// kastikesed valemite kokkuvõttega. 
//esimene alati "lisa uus". 


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');


function ItemOverview() {

    /*  const [items, setItems] = useState([]);
     setItems(ItemData); */

    /* 
       tulevikuks kui "itemid" tulevad andmebaasist
          
       useEffect(() => { // et useEffect ei annaks errorit
           fetch("")
           .then(response => response.json())  // sain terve response'i koos kõikide andmetega
           .then(body => {                     //teine Then on  body kättesaamiseks
               //console.log(body.toString() + " data")
                   const newArray = [];
                   for (const key in body) {
                       newArray.push(body[key]);
                   }
                   //console.log(newArray);
                   setProducts(newArray); // setProducts)= ei annaks errorit 
               }
               );
       },[])
        */

    
    // Modali asjad
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    //modali asjade lõpp



    return (<div className='crafting-overview'>

            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    
                    <button onClick={closeModal}>close</button>
                    <EditItem />

                </Modal>
            </div>



        
            <ul className='item-card'>
                {ItemData.map(element => 
                    
                    <li onClick={openModal}>
                        <ItemCard key={element.id} product={element} />
                    </li>
                    
                    )}
                    </ul>
       


    </div>)
}

export default ItemOverview