import { useParams, Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import Product from '../../components/Product';
import { toast, ToastContainer } from 'react-toastify';

function EditProduct() {

    const nameRef = useRef();
    const priceRef = useRef();
    const imgSrc = useRef();
    const idRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const activeRef = useRef();

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const { productId }  = useParams();
    const [index, setIndex] = useState();

    const [buttonDisabled, setButtonDisabled] = useState(false);

    //toon kõik itemid andmebaasist massiiviks
    useEffect(() => { // et useEffect ei annaks errorit
        fetch("https://webshop-react-22-02-default-rtdb.europe-west1.firebasedatabase.app/products.json")
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

/* 
    const product = products.find(element => 
        element.name.toLowerCase().replace(" ", "-") === productName)
    console.log(product)
 */
    


    function editProduct(event){
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
                    isActive: activeRef.current.checked
                }
                console.log("Üritan muuta: " + newProduct);
                products[index] = newProduct
                    fetch("https://webshop-react-22-02-default-rtdb.europe-west1.firebasedatabase.app/products.json",
                    {
                        method: "PUT",
                        body: JSON.stringify(products)
                    }        
                
                );
                toast.success("Muudetud: " + newProduct.name);
            } else {
                toast.error("pekkis");
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



    return(
        <div styles={{'textAlign': 'center'}}>
            <div>
                <Product key={productId} product={product}/>
            </div>
            <div>
                <Link to="/admin/viewProduct">
                    <button className='menyy-nupp'>tagasi</button>
                </Link> <br/>

                <form onSubmit={editProduct}>
                    <label>Product ID</label> <br/>
                    <input onKeyUp={checkIdUniqueness} min={10000000} max={99999999}ref={idRef}  type="number" defaultValue={product.id}required/> <br/>


                    <label htmlFor="">Product Name</label> <br/>
                    <input  ref={nameRef} type="text" defaultValue={product.name} required/><br/>

                    <label>Product Price</label> <br/>
                    <input ref={priceRef} type="number" defaultValue={product.price} required/><br/>

                    <label htmlFor="">Product picture</label> <br/>
                    <input ref={imgSrc} id='Picture' type='text' defaultValue={product.imgSrc} required/><br/>

                    <label>Product category</label> <br/>
                    <input ref={categoryRef} type="text" defaultValue={product.category} required/> <br/>

                    <label>Product description</label> <br/>
                    <input ref={descriptionRef} type="text" defaultValue={product.description} required/> <br/>

                    <label>Product active</label> 
                    <input ref={activeRef} type="checkbox" defaultChecked={product.isActive} />  <br/>
            

                    <button disabled={buttonDisabled}>enter</button><br/>
                </form>
            </div>
    
        <ToastContainer/>
    </div>
)

}

export default EditProduct;