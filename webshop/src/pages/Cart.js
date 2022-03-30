import { useEffect, useState } from "react";
import styles from  "./Cart.module.css"
import PackageMachines from "../components/PackageMachines";
import { cartSumService } from "../services/cartSumService";
import Payment from '../components/Payment.js'


function Cart() {

  const [cartProducts, setCartProducts] = useState(getCart());
  const [cartSum, setCartSum] = useState(0)

  function getCart() {
    if (sessionStorage.getItem("cart")) {
      return JSON.parse(sessionStorage.getItem("cart"));
    } else {
      return [];
    }
  }

  function onDecreaseQuantity(product) {
    product.quantity--;
    if (product.quantity === 0) {
      onRemoveFromCart(product);
    }
    setCartProducts(cartProducts.slice());
    cartSumService.sendCartSum(cartSum);
    sessionStorage.setItem("cart",JSON.stringify(cartProducts));
  }

  function onIncreaseQuantity(product) {
    // product.quantity = product.quantity + 1;
    // product.quantity += 1;
    product.quantity++;
    setCartProducts(cartProducts.slice());
    sessionStorage.setItem("cart",JSON.stringify(cartProducts));
  }

  function onRemoveFromCart(product) {
    if (!isParcelMachine(product)) {
      const index = cartProducts.indexOf(product); // indexOf-i saan siis kasutada kui on täpselt
      // identne toode millele ma indexit otsin ja indexOf sulgude sisse panen ka otsitavas
      // massiivis. See hõlmab ka mälukohta. Kui ei ole sama mälukoht, siis kasutan findIndex
      // funktsiooni või otsin mingite kindlate omaduste alusel (kasutan otsimiseks ID-d või nime)
      cartProducts.splice(index,1);

      if (cartProducts.length === 1 && isParcelMachine(cartProducts[0])) {
        setCartProducts([])
        sessionStorage.setItem("cart",JSON.stringify([]));
        sessionStorage.removeItem("parcelmachine")
        
      } else {
        setCartProducts(cartProducts.slice());
        sessionStorage.setItem("cart",JSON.stringify(cartProducts));
        

      }
    }

  }


  useEffect(()=>{
    let sumOfCart = 0;
    cartProducts.forEach(element => sumOfCart += element.cartProduct.price * element.quantity);
    setCartSum(sumOfCart.toFixed(2));
    cartSumService.sendCartSum(sumOfCart.toFixed(2));
},[cartProducts]);



  function isParcelMachine(parcelMachine) {
    return parcelMachine.cartProduct.id === "11110000"

  }

                                   //pöördun imporditud css klassi poole
  return (<div>
  
  <div>{cartProducts.map((element) => <div className={styles.cartItem}>
      <div className={styles.cartItemName}>{element.cartProduct.name}</div>
      <div className={styles.cartItemPrice}>{Number(element.cartProduct.price).toFixed(2)} €</div>
      <div className={styles.cartItemQuantityControls}>
        { !isParcelMachine(element) && 
                                <img className={styles.cartItemButton} onClick={() => 
                                  onDecreaseQuantity(element)} src="/cart/minus-button.png" alt="" />}
        <div className={styles.cartItemQuantity}>{element.quantity} tk</div>
        { !isParcelMachine(element) && 
                                <img className={styles.cartItemButton} onClick={() =>
                                  onIncreaseQuantity(element)} src="/cart/plus-button.png" alt="" />}
      </div>
      <div className={styles.cartItemTotal}>{Number(element.cartProduct.price * element.quantity).toFixed(2)} €</div>
        { <img 
              className={isParcelMachine(element) ?
                                styles.buttonDisabled:
                                styles.cartItemButton
                                }
              onClick={() => onRemoveFromCart(element)} 
              src="/cart/bin-button.png" 
              alt="" />}   
          </div>)}

    { cartProducts.length > 0 && <div className={styles.cartSum}>
        <PackageMachines cartContent={cartProducts} sendProducts={setCartProducts} />
        <div>{cartSum} €</div>
         <Payment sumOfCart={cartSum}/>
      </div> }
    </div>
  </div>)
}

export default Cart;