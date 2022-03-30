import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

import './NavigationBar.css'

import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

function NavigationBar2() {

    const { t, i18n } = useTranslation();


    function changeLang(language) {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
    }


    return (<div>
        <Navbar bg="dark" variant="dark">
            <Container>

                Navbar

                <div className="lang">
                    <img src="/language/united-kingdom.png" className="lang-flag" onClick={() => changeLang('en')}></img>
                    <img src="/language/estonia.png" className="lang-flag" onClick={() => changeLang('ee')}></img>
                    <img src="/language/russia.png" className="lang-flag" onClick={() => changeLang('ru')}></img>
                </div> <br />

            </Container>
        </Navbar>
    </div>)
}

export default NavigationBar2;