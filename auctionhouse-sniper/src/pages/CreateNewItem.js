import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import { useRef,useState } from 'react';



//tee uus ese

function CreateNewItem() {

    const idRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const imgSrc = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const isActiveRef = useRef();

    const [products, setProducts] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const navigate = useNavigate();



    function addNewItem(event) {
        console.log("lisan")

        event.preventDefault();
        if (!buttonDisabled && 
            idRef.current.value !=="" &&
            nameRef.current.value !=="" /* &&
            priceRef.current.value !=="" &&
            imgSrc.current.value !== "" &&
            categoryRef.current.value !== "" &&
            descriptionRef.current.value !=="" */
            ) {
                const product = {
                    id: idRef.current.value,
                    name: nameRef.current.value,
                    price: priceRef.current.value,
                    imgSrc: imgSrc.current.value,
                    category: categoryRef.current.value,
                    gameCategory: categoryRef.current.value,
                    description: descriptionRef.current.value,
                    isActive: true
                }
                console.log(product);
                    fetch("https://ah-sniper-18a60-default-rtdb.europe-west1.firebasedatabase.app/",
                    {
                        method: "POST",
                        body: JSON.stringify(product)
                    }        
                
                );
            
            navigate("/admin/viewProduct");
        }
    }

    function checkIdUniqueness() {
        
        if (idRef.current.value.length === 8) {
            const index = products.findIndex(element => element.id === Number(idRef.current.value));
            if (index === -1){            
                setButtonDisabled(false);
            } else {
                setButtonDisabled(true);
            }
        } else {
            setButtonDisabled(true);
        }
    }

    




  return (<>
    <div>CreateNewItem</div>

    <div>
            <Link to="/">
                <button className='menyy-nupp'>tagasi</button>
            </Link> <br/>

        <form className='container' onSubmit={addNewItem}>
            <label>Item ID: check from <a href='https://lostarkcodex.com/us/items'>lostarkcodex.com/us/items</a> </label> <br/>
            <input onKeyUp={checkIdUniqueness} min={10000000} max={99999999}ref={idRef}  type="number" required/> <br/>

            <label htmlFor="">Item Name</label> <br/>
            <input  ref={nameRef}  type="text" required/><br/>

            <label>Item Price</label> <br/>
            <input ref={priceRef}  type="number" required/><br/>

            <label htmlFor="">Item picture</label> <br/>
            <input ref={imgSrc} id='Picture' type='text' required/><br/>

            <label>Item category</label> <br/>
            <input ref={categoryRef} type="text" required/> <br/>

            <label>Item description</label> <br/>
            <input ref={descriptionRef} type="text" required/> <br/>
           

            <button disabled={buttonDisabled}>enter</button>
        </form>

        
        
        </div>




    </>)
}

export default CreateNewItem