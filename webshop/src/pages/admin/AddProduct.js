import { Link, useNavigate } from 'react-router-dom';
import { useRef,useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function AddProduct() {

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



    function addNewProduct(event){
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
                    description: descriptionRef.current.value,
                    isActive: true
                }
                console.log(product);
                    fetch("https://webshop-react-22-02-default-rtdb.europe-west1.firebasedatabase.app/products.json",
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


    return(
        <div>
            <Link to="/admin/">
                <button className='menyy-nupp'>tagasi</button>
            </Link> <br/>

        <form onSubmit={addNewProduct}>
            <label>Product ID</label> <br/>
            <input onKeyUp={checkIdUniqueness} min={10000000} max={99999999}ref={idRef}  type="number" required/> <br/>

            <label htmlFor="">Product Name</label> <br/>
            <input  ref={nameRef}  type="text" required/><br/>

            <label>Product Price</label> <br/>
            <input ref={priceRef}  type="number" required/><br/>

            <label htmlFor="">Product picture</label> <br/>
            <input ref={imgSrc} id='Picture' type='text' required/><br/>

            <label>Product category</label> <br/>
            <input ref={categoryRef} type="text" required/> <br/>

            <label>Product description</label> <br/>
            <input ref={descriptionRef} type="text" required/> <br/>
           

            <button disabled={buttonDisabled}>enter</button>
        </form>
        <ToastContainer />
        </div>
    )


}

export default AddProduct;