

import { useRef, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import AdminProduct from "../../components/AdminProduct";
import SortButtons from "../../components/SortButtons";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button'



/* View Products / otsing otsida ID / nime alusel
    onKeyUp() -- iga klahvi vajutusel
    // 2 - usestate() 
    orginaali jaoks, teine väljanäidatava jaoks
    kõik tooted - 100

    välja näidatakse 10 

    Kõik tooted - võtan teise useState seest */



function ViewProducts() {


    const [t] = useTranslation();
    const [products, setProducts] = useState([]);
    const [productsTemp, setProductsTemp] = useState([]);
    const idRef = useRef();
    const nameRef = useRef();

    const numberOfItemsToShow = 10;

    //modali const
    const { productDeleted, setProductDeleted } = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setShow(true)
        setProductDeleted(product);
    };

    // 87351398


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
                setProductsTemp(newArray)
            }
            );
    }, [])

    function lookForProductsId() {



        //const index = products.findIndex(element => element.id === idRef.current.value);
        console.log(products[0].id + " indeks")
        console.log(idRef.current.value + " idRef")

        const index = products.filter(element => element.id.toString().includes(idRef.current.value.toString()));

        console.log("index: " + index)
        if (index !== []) {


            console.log("leidsin " + index)
            setProductsTemp(index)

        } else {
            console.log("ei leia")
        }
    }

    function lookForProductsName() {

        if (nameRef.current.value.length >= 2) {
            //const index = products.findIndex(element => element.id === idRef.current.value);

            console.log(nameRef.current.value + " :nameRef")
            const index = products.filter(element => element.name.toLowerCase().includes(nameRef.current.value.toLowerCase()));
            console.log(index + " indeks id")
            if (index !== []) {
                console.log("leidsin nime järgi")
                setProductsTemp(index)

            } else {
                console.log("ei leia nime järgi")
            }
        }
    }

    function onProductDeleted(product) {
        let productsArray = products.slice();
        const index = productsArray.indexOf(product);

        if (index !== -1) {
            console.log("productdeleted leidsin indeks>  " + index)
            productsArray.splice(index, 1);
            setProducts(productsArray);
            setProductsTemp(productsArray);
            fetch("https://webshop-react-22-02-default-rtdb.europe-west1.firebasedatabase.app/products.json",
                {
                    method: "PUT",
                    body: JSON.stringify(productsArray)
                })
            toast.success(t("Edukalt kustutatud"), {
                position: "bottom-right"

            });

        } else {
            console.log("productdeleted leidsin")
            toast.error(t("Viga toote kustutamisel!"), {
                position: "bottom-right"
            })
        }

    }


    return (<div style={{ 'text-align': 'center' }}>

{/*         <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button> */}

        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={onProductDeleted}>
                    Delete Product
                </Button>
            </Modal.Footer>
        </Modal>


        <div>
            <div>vaata ladu</div>

            <SortButtons prods={products} prodsSorted={setProductsTemp} />

            <br />
            <div>
                <label>Product ID</label> <br />
                <input onKeyUp={lookForProductsId} max={99999999} ref={idRef} type="number" /> <br />
            </div>

            <div>
                <label>Product Name</label> <br />
                <input onKeyUp={lookForProductsName} ref={nameRef} type="text" /> <br />
            </div>

            <div> {productsTemp.map((element, howManyToShow) => howManyToShow <= numberOfItemsToShow && <AdminProduct key={element.id}
                product={element} productDeleted={handleShow}
            />)}
                <ToastContainer />
            </div>
        </div>
    </div>)
}

export default ViewProducts;