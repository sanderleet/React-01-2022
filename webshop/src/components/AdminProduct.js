
import styles from  "./Product.module.css"
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


function AdminProduct(props) {

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

    return (<div className={styles.Item}>
      <div>{props.product.name}</div>
      <img src={props.product.imgSrc} alt="" />
      <div>{props.product.price}€</div>
      <button onClick={() => props.productDeleted(props.product)}>{t("delete-product-button")}</button>

        <Link to={"/admin/editProduct/" + props.product.id}>
            <button >Muuda toode</button><br/><br/>
        </Link>

    </div>)
  }
  
  export default AdminProduct;