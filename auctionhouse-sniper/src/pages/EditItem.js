import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRef,useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';


function EditItem(props) {


    const idRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const imgSrc = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const isActiveRef = useRef();

    const [index, setIndex] = useState();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const { productId }  = useParams();

    const [buttonDisabled, setButtonDisabled] = useState(true);
    //const navigate = useNavigate();

        //toon kõik itemid andmebaasist massiiviks
        useEffect(() => { // et useEffect ei annaks errorit
            fetch("https://ah-sniper-18a60-default-rtdb.europe-west1.firebasedatabase.app/")
            .then(response => response.json())  // sain terve response'i koos kõikide andmetega
            .then(body => {                     //teine Then on  body kättesaamiseks
                //console.log(body.toString() + " data")
                    const newArray = [];
                    for (const key in body) {
                        newArray.push(body[key]);
                    }
                    //console.log(newArray);
                    setProducts(newArray); // setProducts)= ei annaks errorit 
    
                    const productFound = newArray.find(element => element.id.toString() === productId);
                    setProduct(productFound)
                    const indexFound = newArray.indexOf(productFound);
                    setIndex(indexFound)
                    //console.log(productFound)
                }
                );
        },[])



    function editItem(event){
        event.preventDefault();
        console.log("Üritan muuta enne if-i");
        if (!buttonDisabled && 
            idRef.current.value !=="" &&
            nameRef.current.value !=="" //&&
/*             priceRef.current.value !=="" &&
            imgSrc.current.value !== "" &&
            categoryRef.current.value !== "" &&
            descriptionRef.current.value !=="" */
            ) {
                const newProduct = {
                    id: idRef.current.value,
                    name: nameRef.current.value,
                    price: priceRef.current.value,
                    imgSrc: imgSrc.current.value,
                    category: categoryRef.current.value,
                    description: descriptionRef.current.value,
                    isActive: true
                }
                console.log("Üritan muuta: " + newProduct);
                products[index] = newProduct
                fetch("https://ah-sniper-18a60-default-rtdb.europe-west1.firebasedatabase.app/",
                    {
                        method: "PUT",
                        body: JSON.stringify(products)
                    }        
                
                );
                console.log("Muudetud: " + newProduct.name);
            } else {
                console.log("pekkis");
            }
        
        

    }

    function checkIdUniqueness() {
        
        
        if (idRef.current.value.length === 8) {
            const index = products.findIndex(element => element.id.toString() === idRef.current.value);
            
            if (index === -1 || idRef.current.value === productId){            
                setButtonDisabled(false);
            } else {
                setButtonDisabled(true);
            }
        } else {
            setButtonDisabled(true);
        }
    }







  return (
    <div >
        <form onSubmit={editItem} >
        <div>
        <img /* className='card' */  
                class="center"
                width="150" 
                height="150"
                
                src=''/* {itemImg} */ alt=''          // ning kui enam ei ole esimene ese näitab seotud pilti või
                onError={(e) => {                 // saab errori ning näitab ese-404.png
                    e.target.onerror = null
                    e.target.src = '/images/items/ese-404.png'
                        }}
                    /> </div><br/>

            <label htmlFor="">Item picture</label> <br/>
            <input ref={imgSrc} id='Picture' type='text' required/><br/>
            
            <label>Item ID:</label> <br/>
            <input onKeyUp={checkIdUniqueness} min={10000000} max={99999999}ref={idRef}  type="number" defaultValue={product.id}required/> <br/>

            <label htmlFor="">Item Name:</label> <br/>
            <input  ref={nameRef} type="text" defaultValue={product.name} required/><br/>

        </form>
    </div>



  )
}

export default EditItem