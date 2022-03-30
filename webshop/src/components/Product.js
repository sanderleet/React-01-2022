
import styles from  "./Product.module.css"
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import { cartSumService } from '../services/cartSumService'



function Product(props) {

    const productName = props.product.name;
    const productImg = props.product.imgSrc;
    const productPrice = Number(props.product.price).toFixed(2);

    // produktide võtmed: 
    // id = 8-kohaline number;
    // nameRef = string/text;
    // price = number;
    // imgSrc = string/text, html URL;
    // category = string/text;
    // descriptionRef = string/text;
    // isActiveRef = boolean/checkbox, true/false;

/*      Produktide object:
     {id: "0011001100",
      name: "asd123", 
      price: 4, 
      imgSrc: "https://imgur.com/img.jpg", 
      category:"kategooria", 
      description: "Kirjeldus tekst", 
      isActive: true}
       */

    // [] -> [{name "asd", price: 4, ...}] --> [{name "asd", price: 4, ...}, {name "asd", price: 4, ...},{name "asd", price: 4, ...}]
    //hinna teada saamiseks  element.cartProduct.price
    //koguse poole pöördumiseks element.quantity

    // Carti array:
    // [] -> 

    const { t } = useTranslation();




    function onAddToCart(product) {
        let cartProducts;

        if (sessionStorage.getItem("cart")) {
            cartProducts = JSON.parse(sessionStorage.getItem("cart"));
            const index = cartProducts.findIndex(element => element.cartProduct.name === product.name);
            
            if (index !== -1  ) {
                //suurenda quanty
                cartProducts[index].quantity++;
            } else {
                //push
                const packageMachineIndex = cartProducts.findIndex(element => element.cartProduct.id ==="11110000");
                if (packageMachineIndex === -1){
                    cartProducts.push({cartProduct: product, quantity: 1});
                } else {
                    cartProducts.splice(cartProducts.length-1,0,{cartProduct: product, quantity: 1})
                }

            }
            sessionStorage.setItem("cart", JSON.stringify(cartProducts));

        } else {
            cartProducts = [{cartProduct: product, quantity: 1}];
            
            

        }
        let sumOfCart = 0;
        cartProducts.forEach(element => sumOfCart += element.cartProduct.price * element.quantity);
        cartSumService.sendCartSum(sumOfCart)
        sessionStorage.setItem("cart",JSON.stringify(cartProducts));
        props.addedToCart();
    }






    return (<div className={styles.Item}>
        <div >{productName}</div> <br/>
        <img src={productImg} alt="product"/>
        <div className={styles.ItemPrice}>{productPrice}$</div>
        <button onClick={() => onAddToCart(props.product)}>{t("add-to-cart")}</button>

{/*         <Link to={"/admin/editProduct/" + element.name.toLowerCase().replace(" ", "-")}>
            <button>Muuda toode</button><br/><br/>
        </Link> */}
        
    </div>)
}

export default Product;