import { Link } from 'react-router-dom';

function Kodu ()  {
    return ( 
          // Intro or smth. wat do?
       
        <div className="App">

            <p>Hello, I am Blaatens Blaatens, HMW project "portfoolio".</p>

            <p>This the main page.</p>
            <br/>

            {/* Jagaja / Divider  */}
            <hr width="77%" color="grey" size="8"/>

            <br/>
            <br/>

            {/* algab kolme-lingi-pildi teema */}

            <div className="main-link-list"> 
                {/*Kui Link ja IMG  taggid kokku panna siis Pildid kaovad ning alles jäävad Hallid(background) kastid */}
                <Link to="/Work1">< img src="Images\Work-Experience-1.jpg" alt="Work Experience" className="main-link"/> </Link> 
                <Link to="/Skills2">< img src="Images\Skills-2.jpg" alt="Skills" className="main-link"/> </Link> 
                <Link to="/LevelUp3">< img src="Images\Level-up-3.jpg" alt="Level up" className="main-link"/> </Link>
            </div>

            {/* lõppes kolme-lingi-pildi teema */}

     
    </div>

    );
} 

export default Kodu