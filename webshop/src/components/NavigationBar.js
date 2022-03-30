import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import webIcon from './WebShop-io.svg';
import './NavigationBar.css'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Button from 'react-bootstrap/Button'
import { useContext, useState } from 'react';
import { cartSumService } from '../services/cartSumService';
import { loggedInService } from '../services/loggedInService';
import AuthContext from '../store/authContext';



function NavigationBar() {

    // t - tõlkimiseks
    // i18n - keele vahetamiseks
    const { t, i18n } = useTranslation();
    const [cartSum, setCartSum] = useState(getCartSumFromSS())
/*     const [loggedIn, setLoggedIn] = useState(loggedInFromSS()) */

    const ctx = useContext(AuthContext);

    
    function getCartSumFromSS() {
      if (sessionStorage.getItem("cart")) {
        const cartProducts = JSON.parse(sessionStorage.getItem("cart"));
        let sumOfCart = 0;
        cartProducts.forEach(element => sumOfCart += element.cartProduct.price * element.quantity);
        return sumOfCart;
      } else {
        return 0;
      }
    }

/*     function loggedInFromSS() {
      return (sessionStorage.getItem("isLoggedIn"))
    } */

    cartSumService.getCartSum().subscribe(cartSumFromObs => setCartSum(cartSumFromObs))
/*     loggedInService.getIsLoggedIn().subscribe(isLoggedInFromObs => setLoggedIn(isLoggedInFromObs))
 */

    function changeLang(language) {
      i18n.changeLanguage(language);
      localStorage.setItem("language", language);
    }

/*     function logOut() {
      sessionStorage.removeItem("isLoggedIn");
      loggedInService.sendIsLoggedIn(false);
    } */



    return(
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/" href="#home"><img className='logo' alt='main logo' src={webIcon} /></Navbar.Brand>
              <Nav className="me-auto">            
              {ctx.loggedIn &&<Nav.Link href="/admin">{t('admin-button')}</Nav.Link>}
                <Nav.Link href="/ostukorv">{t('cart-button')}</Nav.Link>
                <div className="cart-sum">{Number(cartSum).toFixed(2)} €</div>
              </Nav>
              <Link to="/poed">
                <Button >Meie Poed</Button>
              </Link>

              <div className="lang">
                <img src="/language/united-kingdom.png" className="lang-flag" onClick={ () => changeLang('en')}></img>
                <img src="/language/estonia.png" className="lang-flag" onClick={ () => changeLang('ee')}></img>
                <img src="/language/russia.png" className="lang-flag" onClick={ () => changeLang('ru')}></img>
              </div> <br/>
              { !ctx.loggedIn && <Link to="/logi-sisse">
                  <button>Logi</button>
                </Link>}
              { ctx.loggedIn && <button onClick={ctx.onLogout}>Logi Välja</button>}
          </Container>
        </Navbar>
      
    )


}

export default NavigationBar;