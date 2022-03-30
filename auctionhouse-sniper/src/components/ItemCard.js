import React from 'react'
import * as AiIcons from 'react-icons/ai';


function ItemCard(props) {

    const itemID = props.product.id
    const itemName = props.product.name;
    const itemPrice = Number(props.product.price).toFixed(2);
    const itemImg = props.product.pictureURL;



    return (

        <div className='card' key={itemID}>
            <div className='card-img'>

                {((itemID === 10000000) &&          //esimene item on Link uue eseme tegemiseks alati*
                    <AiIcons.AiOutlinePlus style={{       // esimese eseme-kaart näitab plussi ikooni .png asemel 
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
                    || <img src={itemImg} alt=''          // ning kui enam ei ole esimene ese näitab seotud pilti või
                        onError={(e) => {                 // saab errori ning näitab ese-404.png
                            e.target.onerror = null
                            e.target.src = '/images/items/ese-404.png'
                        }}
                    />}

            </div>
            <div className='card-header'>
                <h2>{itemName}</h2>
                <p>{itemPrice} Raha</p>
            </div>
        </div>
    )
}

export default ItemCard