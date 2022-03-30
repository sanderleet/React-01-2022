import React from 'react'
import * as AiIcons from 'react-icons/ai';
import './ItemView.css'
import ItemData from '../components/ItemData';
import ItemFormulaData from '../components/ItemFormulaData'
import EditItem from './EditItem'

//modali jaoks 3 importi
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ItemCard from '../components/ItemCard';

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

function CraftingOverview() {



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


    //see järgnev tuleb kõik Item.js seest
/*     const listItems = ItemData.map((item) =>

        <div className='card' key={item.id}>
            <div className='card-img'>

                {((item.id === 10000000) &&
                    <AiIcons.AiOutlinePlus style={{
                        top: '20px',
                        right: '50%',
                        left: '50%',
                        width: '150px',
                        height: '150px',
                        borderradius: '20',
                        alignContent: 'center'
                    }}
                        size="50px"
                    />)
                    || <img src={item.pictureURL} alt=''
                        onError={(e) => {
                            e.target.onerror = null
                            e.target.src = '/images/items/ese-404.png'
                        }}
                    />
                }

            </div>
            <div className='card-header'>
                <h2>{item.name}</h2>
                <p>{item.price} G</p>
            </div>
        </div>
    ) */




    return (
        <div className='crafting-overview'>

            <h3>CraftingOverview</h3>

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

            {/* otsi itemData massiivist indeks kus: element.materialOneId === ItemData.id
            
            
            */}

            <ul className='item-card'>
                <li onClick={openModal}>
                    {ItemFormulaData.map(element => 
                        
                        <div>
                            <div> {element.name} </div>
                            <div>  {ItemData[1].name} x20</div> 
                            <div>  {ItemData[2].name} x35</div>
                            <div>   Silver x1200 </div>
                            <div> arvutus/maksumus</div>

                        </div>
                    
                    )}
                    


                </li>
            </ul>



        </div>)
}

export default CraftingOverview