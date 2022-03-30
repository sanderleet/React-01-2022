import { Link } from 'react-router-dom';


function Menüü () {
    return (<div>
        <Link to="/">
        <button className='menyy-nupp'>AVALEHELE</button>
        </Link>


        <Link to="/tegelased">
        <button className='menyy-nupp'>TEGELASED</button>
        </Link>

        <Link to="/PlaceholderEsemed">
        <button className='menyy-nupp'>PLACEHOLDER ESEMED</button>
        </Link>

    </div>)
}

export default Menüü;