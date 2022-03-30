import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import Product from "../components/Product";
import SortButtons from "../components/SortButtons";
import Carousel  from "../components/Carousel";








function Home() {

    const [t] = useTranslation();
    const [products, setProducts] = useState([]);

    //kui l'heb k'ima useState parempoolne funktsioon ükskõik millisel useState-l, 
    //siis tehakse terve Component uuesti kui ta on componendi renderadmisega lõpule jõudnud

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
            }
            );
    },[])

    // {name "sadas", price: 4, ...}
    // [] -> [{name "asd", price: 4, ...}] --> [{name "asd", price: 4, ...}, {name "asd", price: 4, ...},{name "asd", price: 4, ...}]
    //hinna teada saamiseks  element.cartProduct.price
    //koguse poole p;;rdumiseks element.quantity
    // [] --> [{cartProduct:{name "sadas", price: 4, ...}, quantity;1}]  ehk Object objectis/nested objects



/* Näide sorteerist:

    const months = [{month: 'March'}, {month: 'Jan'}, {month: 'Feb'}, {month: 'Dec'}];
    const months2 = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort((a, b) => a.month.localeCompare(b.month));
    console.log(months);
    // expected output: Array ["Dec", "Feb", "Jan", "March"]

    const array1 = [{number: 1}, {number: 30}, {number: 4}, {number: 21}, {number: 100000}];
    array1.sort((a, b) => a.number - b.number);
    console.log(array1);
    // expected output: Array [1, 100000, 21, 30, 4]
*/


return(

    <div>
        <Carousel/>
        <SortButtons prods={products} prodsSorted={setProducts} />
        <div>{products.map(element => <Product key={element.id}
                product={element} addedToCart={() => toast.success(t("Edukalt lisatud ostukorvi!"), {
                    position: "bottom-right"
                })}
            />)}
        </div>
        <ToastContainer />
  </div>)
}

export default Home;